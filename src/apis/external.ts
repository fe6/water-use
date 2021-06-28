/** @format */

import defHttp from './index';
import type {
  InfoModal,
} from '../api-mods/external';
import { isDevMode } from '../env';
import localExternal from '../mock/external';

enum Api {
  menus = '/api/external/menus',
}

// 获取权限信息接口
// php: XXX
export function getSomeInfo() {
  const localData = () => new Promise(resolve => resolve(localExternal));
  return isDevMode()
    ? localData()
    : defHttp.request<InfoModal>({
      url: Api.menus,
      method: 'GET',
    });
}
