/** @format */

import type {
  RouteLocationRaw,
  RouteRecordName,
  LocationQueryRaw,
} from 'vue-router';
import { isString } from '@fe6/shared';

import router from '../routers';

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & {
  path?: string
  name?: RouteRecordName
  query?: LocationQueryRaw
};

function handleError(e: Error) {
  console.error(e);
}

// page switch
export function useGo() {
  const { push, replace } = router;
  function go(
    opt: RouteLocationRawEx | string,
    isReplace = false,
  ) {
    if (!opt) { return; }
    if (isString(opt)) {
      const optString = String(opt);
      isReplace
        ? replace(optString).catch(handleError)
        : push(optString).catch(handleError);
    }
    else {
      const o = opt as RouteLocationRaw;
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
    }
  }
  return go;
}

// TODO 去登陆
// export const goLogin = (replace?: boolean) => {
//   const go = useGo();
//   go(PageEnum.BASE_LOGIN, replace);
// };

/**
 * @description: location href 封装
 */
export const siteHref = (url: string) => {
  location.href = url;
};

/**
 * @description: window.open 封装
 */
export const siteOpen = (url: string) => {
  window.open(url);
};

/**
 * @description: reload 封装
 */
export const siteReload = () => {
  location.reload();
};
