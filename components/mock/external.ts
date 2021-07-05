// 权限模拟，菜单的渲染以及菜单名字的模型
export default {
  menus: [
    {
      icon: '29516',
      isAccessible: true,
      name: '概览',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/overview',
      permissionCode: 'Common',
      subMenus: [],
      type: 'base',
    },
    {
      icon: '29515',
      isAccessible: true,
      name: '店铺',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/shop',
      permissionCode: 'Shop',
      subMenus: [
        {
          icon: '',
          isAccessible: true,
          name: '全店装修',
          order: 1,
          options: {
            deniedTips: 'string',
            // 权限的类型，会有不同的操作
            deniedType: 'hidden',
            // 主域
            domain: 'https://evente.cn',
            // 跳转方式
            target: '_self',
            // 版本
            version: '4.0'
          },
          path: '/test1',
          permissionCode: 'ShopAll',
          subMenus: [
            {
              icon: '',
              isAccessible: true,
              name: '店铺主页',
              order: 1,
              options: {
                deniedTips: 'string',
                // 权限的类型，会有不同的操作
                deniedType: 'hidden',
                // 主域
                domain: 'https://evente.cn',
                // 跳转方式
                target: '_self',
                // 版本
                version: '4.0'
              },
              path: '/test1/test4',
              permissionCode: 'ShopHome',
              subMenus: [],
            },
            {
              icon: '',
              isAccessible: true,
              name: '店铺导航',
              order: 1,
              options: {
                deniedTips: 'string',
                // 权限的类型，会有不同的操作
                deniedType: 'hidden',
                // 主域
                domain: 'https://evente.cn',
                // 跳转方式
                target: '_self',
                // 版本
                version: '4.0'
              },
              path: '/test2',
              permissionCode: 'ShopNav',
              subMenus: [],
            },
            {
              icon: '',
              isAccessible: true,
              name: '微页面',
              order: 3,
              options: {
                deniedTips: 'string',
                // 权限的类型，会有不同的操作
                deniedType: 'hidden',
                // 主域
                domain: 'https://evente.cn',
                // 跳转方式
                target: '_self',
                // 版本
                version: '4.0'
              },
              path: '/test3',
              permissionCode: 'ShopMicroPage',
              subMenus: [],
            },
          ],
          type: 1,
        },
        {
          icon: '',
          isAccessible: true,
          name: '设置',
          order: 1,
          options: {
            deniedTips: 'string',
            // 权限的类型，会有不同的操作
            deniedType: 'hidden',
            // 主域
            domain: 'https://evente.cn',
            // 跳转方式
            target: '_self',
            // 版本
            version: '4.0'
          },
          path: '/set',
          permissionCode: 'ShopSet',
          // subMenus: [],
          type: 1,
        },
      ],
      type: 'base',
    },
    {
      icon: '29513',
      isAccessible: true,
      name: '产品',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'Product',
      subMenus: [],
      type: 'base',
    },
    {
      icon: '29520',
      isAccessible: true,
      name: '订单',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'Order',
      subMenus: [],
      type: 'base',
    },
    {
      icon: '29517',
      isAccessible: true,
      name: '客户',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'Crm',
      subMenus: [],
      type: 'base',
    },
    {
      icon: '29512',
      isAccessible: true,
      name: '财务',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'Finance',
      subMenus: [],
      type: 'base',
    },
    {
      icon: '29514',
      isAccessible: true,
      name: '应用',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'App',
      subMenus: [],
      type: 'other',
    },
    {
      icon: '29519',
      isAccessible: true,
      name: '企微',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'EnterpriseWechat',
      subMenus: [],
      type: 'other',
    },
    {
      icon: '29518',
      isAccessible: true,
      name: '设置',
      order: 1,
      options: {
        deniedTips: 'string',
        // 权限的类型，会有不同的操作
        deniedType: 'hidden',
        // 主域
        domain: 'https://evente.cn',
        // 跳转方式
        target: '_self',
        // 版本
        version: '4.0'
      },
      path: '/test1/test4',
      permissionCode: 'Set',
      subMenus: [],
      type: 'other',
    },
  ],
};
