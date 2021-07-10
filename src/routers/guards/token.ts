import type { Router } from 'vue-router';

import { getToken } from '../../utils/cookie';
import { goLoginPage } from '../../utils/account';

// 全局 加载状态 的 守卫
export function createTokenGuard(router: Router) {
  router.beforeEach((to) => {
    // NOTE token
    if (!getToken() && to.path !== '/login') {
      goLoginPage(true);
      return false;
    }

    return true;
  });
}
