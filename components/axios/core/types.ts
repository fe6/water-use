/** @format */

import type { AxiosRequestConfig } from 'axios';
import { AxiosTransform } from './transform';

export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean
  // 格式化请求参数时间
  formatDate?: boolean
  //  是否处理请求结果
  isTransformRequestResult?: boolean
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string
  // 错误消息提示类型
  // 是否加入时间戳
  joinTime?: boolean
  // 是否单接口 mock 数据
  mock?: boolean
  // 是否 过滤 code message
  filter?: boolean
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string
  transform: AxiosTransform
  requestOptions?: RequestOptions
  apiUrl?: string
  isDevMode?: () => boolean
  // 报错的 log 提醒
  errorLog?: Function
  // 报错的 提示弹框 ( message.error ) 提醒
  errorMsg?: Function
  // 报错的 提示弹框 ( modal.error ) 提醒
  errorModal?: Function
}

export interface Result<T = any> {
  code: number
  // type: 'success' | 'error' | 'warning';
  message: string
  data: T
}
// multipart/form-data：上传文件
export interface UploadFileParams {
  // 其他参数
  data?: Indexable
  // 文件参数的接口字段名
  name?: string
  // 文件
  file?: File | Blob
  // 文件
  files?: File[] | Blob[]
  // 文件名
  filename?: string
  [key: string]: any
}
