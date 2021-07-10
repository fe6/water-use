import type { Router } from 'vue-router';

import { getToken } from '../../utils/cookie';

// 全局 加载状态 的 守卫
export function createTokenGuard(router: Router) {
  router.beforeEach(() => {
    // NOTE token
    if (!getToken()) {
      return false;
    }

    return true;
  });
}
