/** @format */

import { defHttp } from '@fe6/water-use';

enum Api {
  urlLogout = 'business/account/logout',
}

// 退出
// php 田景文
export const getLogout = () => {
  return defHttp.request({
    url: Api.urlLogout,
    method: 'GET',
  });
};
