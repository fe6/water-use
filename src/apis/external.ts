/** @format */

import defHttp from './index';
import type {
  InfoModal,
} from '../api-mods/external';
import { getEnvConfig } from '../env';
import localExternal from '../mock/external';

enum Api {
  menus = 'business/rbac/right/menus',
}

// 获取权限信息接口
// php: 陈建
export function getSomeInfo() {
  const ENV = getEnvConfig();
  const localData = () => new Promise(resolve => resolve(localExternal));
  return ENV.VITE_USE_AUTH
    ? defHttp.request<InfoModal>({
      url: Api.menus,
      method: 'GET',
    })
    : localData();
}
