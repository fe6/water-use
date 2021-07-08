/** @format */

import defHttp from './index';

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
