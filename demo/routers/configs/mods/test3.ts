/** @format */

// NOTE water/use
import type { AppRouteModule } from '@fe6/water-use';
import { LAYOUT_DEF, LAYOUT_BOX } from '@fe6/water-use/routers/constant';

const test3Page: AppRouteModule = {
  path: '/test3',
  name: 'Test3',
  component: LAYOUT_DEF,
  children: [
    {
      path: '',
      name: 'Test3',
      children: [
        {
          path: '',
          name: 'Test3View',
          meta: {
            title: '微页面',
          },
          component: () => import('@@views/Test.vue'),
        },
      ],
      component: LAYOUT_BOX,
    },
  ],
};

export default test3Page;
