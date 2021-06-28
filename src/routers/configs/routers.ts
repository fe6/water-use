import type { AppRouteRecordRaw } from '../types';

export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: '404',
  component: () => import('../../components/not-page/NotPage.vue'),
  meta: {
    title: '404',
  },
};
