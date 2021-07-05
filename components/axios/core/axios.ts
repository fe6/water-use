/** @format */

import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import type {
  RequestOptions,
  CreateAxiosOptions,
  Result,
  UploadFileParams,
} from './types';

import { isFunction, clone, isUndefined } from 'lodash-es';
import axios from 'axios';

import { errorResult } from '../constant';
import { ContentTypeEnum } from '../http-enum';

import { AxiosCanceler } from './axios-cancel';

export * from './transform';
export * from './types';

/**
 * @description:  axios module
 */
export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description:  Create axios instance
   */
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config);
  }

  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  /**
   * @description: Reconfigure axios
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) { return; }

    this.createAxios(config);
  }

  /**
   * @description: Set general header
   */
  setHeader(headers: any): void {
    if (!this.axiosInstance) { return; }

    Object.assign(this.axiosInstance.defaults.headers, headers);
  }

  /**
   * @description: Interceptor configuration
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) { return; }

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform;

    const axiosCanceler = new AxiosCanceler();

    // Request interceptor configuration processing
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // If cancel repeat request is turned on, then cancel repeat request is prohibited
        const {
          headers: { ignoreCancelToken = false },
        } = config;
        !ignoreCancelToken && axiosCanceler.addPending(config);
        if (requestInterceptors && isFunction(requestInterceptors)) { config = requestInterceptors(config); }

        return config;
      },
      undefined,
    );

    // Request interceptor error capture
    requestInterceptorsCatch
      && isFunction(requestInterceptorsCatch)
      && this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorsCatch,
      );

    // Response result interceptor processing
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) { res = responseInterceptors(res); }

      return res;
    }, undefined);

    // Response result interceptor error capture
    responseInterceptorsCatch
      && isFunction(responseInterceptorsCatch)
      && this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorsCatch,
      );
  }

  /**
   * @description:  File Upload
   */
  uploadFile<T = any>(url: string, params: UploadFileParams): Promise<T> {
    const formData = new window.FormData();

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        if (!params.data) { return; }
        const value = params.data[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item);
          });
          return;
        }

        formData.append(key, params.data[key]);
      });
    }

    if (!isUndefined(params.files)) {
      (params.files as any).forEach((fItem: Recordable) => {
        formData.append(fItem.name || 'file', fItem.file);
      });
    }

    const { requestOptions } = this.options;

    const transform = this.getTransform();
    const { requestCatch, transformRequestData } = transform || {};

    return new Promise((resolve, reject) => {
      this.axiosInstance.request<T>({
        url: `${(requestOptions as any).apiUrl}${url}`,
        method: 'POST',
        data: formData,
        headers: {
          'Content-type': ContentTypeEnum.FORM_DATA,
          'ignoreCancelToken': true,
        },
      })
        .then((res: AxiosResponse<T>) => {
          if (
            transformRequestData
            && typeof transformRequestData === 'function'
          ) {
            const ret = transformRequestData(res as any, {
              isTransformRequestResult: true,
              filter: true,
            });
            ret !== errorResult ? resolve(ret) : reject(this.options.errorLog!('网络错误'));
            return;
          }
          resolve((res as unknown) as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestCatch && typeof requestCatch === 'function') {
            reject(requestCatch(e));
            return;
          }
          reject(e);
        });
    });
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    let conf: AxiosRequestConfig = clone(config);
    const transform = this.getTransform();

    const { requestOptions } = this.options;

    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    const { beforeRequestHook, requestCatch, transformRequestData }
      = transform || {};
    if (beforeRequestHook && isFunction(beforeRequestHook)) { conf = beforeRequestHook(conf, opt); }

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestData && isFunction(transformRequestData)) {
            const ret = transformRequestData(res, opt);
            ret !== errorResult ? resolve(ret) : reject(this.options.errorLog!('网络错误'));
            return;
          }
          resolve((res as unknown) as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestCatch && isFunction(requestCatch)) {
            reject(requestCatch(e));
            return;
          }
          reject(e);
        });
    });
  }
}
