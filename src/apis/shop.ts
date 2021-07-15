/** @format */

import { defHttp } from '@fe6/water-use';

enum Api {
  urlShopList = 'business/shop/base/items',
  urlCheckShop = 'business/shop/base/items/default',
}

// 管理员店铺列表
// php 田景文
export const getShopList = (params: any) => {
  return defHttp.request({
    url: Api.urlShopList,
    method: 'GET',
    params,
  });
};

// 切换默认店铺
// php 田景文
export const getShopSwitch = (id: number | string) => {
  return defHttp.request({
    url: `business/shop/base/items/${id}/switch`,
    method: 'GET',
  });
};

// 查询默认店铺
// php 田景文
export const getCheckShopFilter = () => {
  return defHttp.request({
    url: Api.urlCheckShop,
    method: 'GET',
  });
};
