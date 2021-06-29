/** @format */

import defHttp from './index';

enum Api {
  code = '/api/test/code',
  notFound = '/api/404',
  error503 = '/api/503',
}

// 测试接口
// php: XXX
export function getCode() {
  return defHttp.request({
    url: Api.code,
    method: 'GET',
  });
}

// 测试接口 404
// php: XXX
export function get404() {
  return defHttp.request({
    url: Api.notFound,
    method: 'GET',
  });
}

// 测试接口 503
// php: XXX
export function get503() {
  return defHttp.request({
    url: Api.error503,
    method: 'GET',
  });
}
