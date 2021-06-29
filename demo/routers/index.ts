import type { RouteRecordRaw } from 'vue-router';

// NOTE water/use
// import type { AppRouteModule } from '@fe6/water-use/src/index';
import type { AppRouteRecordRaw } from '@fe6/water-use/src/index';
import waterRouter from '@fe6/water-use/routers';

import { basicRoutes } from '@@routers/configs';
export { setupRouter } from '@fe6/water-use/routers';

// 默认路由的导入
basicRoutes.forEach((route: AppRouteRecordRaw) => {
  waterRouter.addRoute((route as any) as RouteRecordRaw);
});

export default waterRouter;
