/** @format */

import type { Router } from 'vue-router';

import { unref, ref } from 'vue';
import { useTimeoutFn } from '@vueuse/core';

import myStores from '../../stores';

// 全局 加载状态 的 守卫
export function createPageLoadingGuard(router: Router) {
  let timeoutStop = () => {};
  let timeoutIsPending = ref(false);
  router.beforeEach(() => {
    // NOTE token
    // if (!authStore.getTokenState) {
    //   return true;
    // }

    // NOTE 全局加载
    unref(myStores).dispatch('app/setPageLoading', true);

    return true;
  });
  router.afterEach((to) => {
    if (!to.meta.loading && !timeoutIsPending.value) {
      timeoutStop();
      const { isPending, stop } = useTimeoutFn(() => {
        unref(myStores).dispatch('app/setPageLoading', false);
      }, 300);

      timeoutStop = stop;
      timeoutIsPending = isPending;
    }

    return true;
  });
}
