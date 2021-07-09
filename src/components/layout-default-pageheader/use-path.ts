/** @format */

import type { RouteLocationNormalizedLoaded } from 'vue-router';

import { isFunction } from 'lodash-es';
import { hasOwn } from '@vue/shared';

export const getRouterMeta = (currentRoute: RouteLocationNormalizedLoaded, key: string) => {
  if (!key) {
    return [];
  }
  if (
    hasOwn(currentRoute, 'meta')
    && hasOwn(currentRoute.meta, key)
    && (currentRoute.meta as any)[key].length
  ) {
    return (currentRoute.meta as any)[key];
  }
  return [];
};

export const getBreadcrumbRoutes = (currentRoute: RouteLocationNormalizedLoaded) => {
  return getRouterMeta(currentRoute, 'breadcrumbRoutes');
};
export const getTitle = (currentRoute: RouteLocationNormalizedLoaded) => {
  const title = getRouterMeta(currentRoute, 'title');
  return JSON.stringify(title) === '[]' ? '' : title;
};

export const getHeaderGoBack = (currentRoute: RouteLocationNormalizedLoaded) => {
  if (
    hasOwn(currentRoute, 'meta')
    && hasOwn(currentRoute.meta, 'headerGoBack')
    && isFunction((currentRoute.meta as any).headerGoBack)
  ) {
    return (currentRoute.meta as any).headerGoBack;
  }
  return () => {};
};
