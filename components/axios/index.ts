/** @format */

// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { CreateAxiosOptions } from './core/types';
import { VAxios } from './core/axios';

import { ContentTypeEnum } from './http-enum';
import transformHandler from './transform-handler';

export default function createAxios(opt?: Partial<CreateAxiosOptions>) {
  const defOptions = {
    timeout: 10 * 1000,
    // 接口可能会有通用的地址部分，可以统一抽取出来
    prefixUrl: '',
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    // 如果是form-data格式
    // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    // 数据处理方式
    transform: transformHandler(opt),
    // 配置项，下面的选项都可以在独立的接口请求中覆盖
    requestOptions: {
      // 需要对返回数据进行处理
      isTransformRequestResult: true,
      // post请求的时候添加参数到url
      joinParamsToUrl: false,
      // 格式化提交参数时间
      formatDate: true,
      // 接口地址
      apiUrl: opt?.apiUrl,
      //  是否加入时间戳
      joinTime: true,
    },
  };
  return new VAxios(
    Object.assign(
      defOptions,
      opt || {},
    ),
  );
}
