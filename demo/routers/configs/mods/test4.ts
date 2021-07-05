/** @format */

// NOTE water/use
import type { AppRouteModule } from '@fe6/water-use';
import { LAYOUT_SIMPLE, LAYOUT_INNER } from '@fe6/water-use/routers/constant';

const menus1 = [
  {
    title: 'ces1',
    path: '/test1',
  },
  {
    title: 'ces2',
    path: '/test2',
  }
];

const menus2 = [
  {
    title: 'ces4',
    path: '/test4',
  },
  {
    title: 'ces2',
    path: '/test2',
  }
];

const test4Page: AppRouteModule = {
  path: '/test4',
  name: 'Test4',
  component: LAYOUT_SIMPLE,
  children: [
    {
      path: '',
      name: 'Test4',
      children: [
        {
          path: '',
          name: 'Test4View',
          meta: {
            title: '微页面',
            breadcrumbRoutes: [{
                path: '/',
                title: '首页',
              },{
                path: '/',
                title: '账户设置1',
            }],
            headerGoBack: () => {
              console.log(33, '11');
            },
          },
          component: () => import('@@views/TestInner.vue'),
        },
        {
          path: '',
          name: 'Test42View',
          meta: {
            title: '微页面3',
            breadcrumbRoutes: [{
                path: '/',
                title: '首4页',
              },{
                path: '/',
                title: '账户设置1',
            }],
            headerGoBack: () => {
              console.log(111, '222');
            }
          },
          component: () => import('@@views/TestInner.vue'),
        },
        {
          path: 'a',
          name: 'Test41View',
          meta: {
            title: '微页面1',
          },
          component: () => import('@@views/TestInner.vue'),
        },
      ],
      component: LAYOUT_INNER,
      props: (to: any) => {
        console.log(to.name === 'Test4View', 'a,b,c');
        return {
          pageHeader: to.name !== 'Test41View',
          fixWidth: to.name !== 'Test41View',
          menus: to.name === 'Test4View' ? menus1 : menus2,
        };
      }
    },
  ],
};

export default test4Page;
