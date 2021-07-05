import type { RouteRecordRaw } from 'vue-router';

// NOTE water/use
import type { AppRouteRecordRaw } from '@fe6/water-use';
import waterRouter from '@fe6/water-use/routers';

export { setupRouter } from '@fe6/water-use/routers';

import { basicRoutes } from './configs';

// 默认路由的导入
basicRoutes.forEach((route: AppRouteRecordRaw) => {
  waterRouter.addRoute((route as any) as RouteRecordRaw);
});

export default waterRouter;
