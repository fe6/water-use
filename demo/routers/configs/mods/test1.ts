/** @format */

// NOTE water/use
import { AppRouteModule } from '@fe6/water-use/routers/types';
import { LAYOUT_SIMPLE, LAYOUT_BOX } from '@fe6/water-use/routers/constant';

const test1Page: AppRouteModule = {
  path: '/test1',
  name: 'Test1',
  component: LAYOUT_SIMPLE,
  children: [
    {
      path: '',
      name: 'Test1',
      children: [
        {
          path: '',
          name: 'Test1View',
          meta: {
            title: '测试1',
            menuActive: 'Shop',
          },
          component: () => import('@@views/TestSimple.vue'),
        },
        {
          path: 'test4',
          name: 'Test4View',
          meta: {
            title: '店铺主页',
          },
          component: () => import('@@views/TestContent.vue'),
        },
      ],
      component: LAYOUT_BOX,
    },
  ],
};

export default test1Page;
