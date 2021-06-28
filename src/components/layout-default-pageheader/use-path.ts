/** @format */

import type { RouteLocationMatched } from 'vue-router';

import { ref, toRaw, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { isString } from 'lodash-es';

// NOTE 重定向
// import { REDIRECT_NAME } from '@@routers/constant';

import { filter } from './utils';
import { useGo } from '../../hooks/use-page';
import { getEnvConfig } from '../../env';

// TODO [fix] 莫名的首页匹配面包屑
// const homeText = '首页';

export default () => {
  const routes = ref<RouteLocationMatched[]>([]);
  const { currentRoute } = useRouter();
  const { VITE_BASE_HOME } = getEnvConfig();

  watchEffect(() => {
    // NOTE 重定向
    // if (currentRoute.value.name === REDIRECT_NAME) return;

    const matched = currentRoute.value?.matched;
    if (!matched || matched.length === 0) { return; }
    const breadcrumbList = filterItem(toRaw(matched));

    // NOTE 过滤 VITE_BASE_HOME 以及没有 meta 标签 或者 没有 meta 中的 title
    const filterBreadcrumbList = breadcrumbList.filter(
      (item: any) => item.meta && item.meta.title && item.path !== VITE_BASE_HOME,
    );

    // TODO [fix] 莫名的首页匹配面包屑
    // if (filterBreadcrumbList.length === breadcrumbList.length) {
    //   filterBreadcrumbList.unshift(({
    //     path: VITE_BASE_HOME,
    //     meta: {
    //       title: homeText,
    //       isLink: true,
    //     },
    //   } as unknown) as RouteLocationMatched);
    // }

    if (currentRoute.value.meta?.currentActiveMenu) {
      filterBreadcrumbList.push(
        (currentRoute.value as unknown) as RouteLocationMatched,
      );
    }

    routes.value = filterBreadcrumbList;
  });

  function filterItem(list: RouteLocationMatched[]) {
    let resultList = filter(list, (item: any) => {
      const { meta } = item;

      if (!meta) {
        return false;
      }
      const { title, hideBreadcrumb, hideMenu } = meta;
      if (!title || hideBreadcrumb || hideMenu) {
        return false;
      }

      return true;
    }).filter(
      (item: any) => !item.meta?.hideBreadcrumb || !item.meta?.hideMenu,
    );

    resultList = resultList.filter(
      (item: any) => item.path !== VITE_BASE_HOME,
    );
    return resultList;
  }

  const handleClick = (
    route: RouteLocationMatched,
    paths: string[],
    ev: Event,
  ) => {
    ev?.preventDefault();

    const { children, redirect, meta } = route;

    if (children?.length && !redirect) {
      ev?.stopPropagation();
      return;
    }
    if (meta?.carryParam) {
      return;
    }

    const go = useGo();
    if (redirect && isString(redirect)) {
      go(redirect as any);
    }
    else {
      const ps = paths.slice(1);
      const lastPath = ps.pop() || '';
      const parentPath = ps.pop() || '';
      let path = `${parentPath}/${lastPath}`;
      path = /^\//.test(path) ? path : `/${path}`;
      go(path);
    }
  };
  return [routes, handleClick] as const;
};
