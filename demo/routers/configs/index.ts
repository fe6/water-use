// import type { AppRouteRecordRaw, AppRouteModule } from '@fe6/water-use/routers/types';

// NOTE water/use
import { PAGE_NOT_FOUND_ROUTE } from '@fe6/water-use/routers/configs/routers';

const modules = import.meta.globEager('./mods/**/*.ts');

const routeModuleList: any[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 不用权限的白名单
export const basicRoutes: any[] = [
  PAGE_NOT_FOUND_ROUTE,
  ...asyncRoutes,
];
