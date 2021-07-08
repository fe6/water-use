import { App } from 'vue';

// water
import waterPro from './water';

// components
import AForbidden from './components/forbidden/src';
import ANotPage from './components/not-page/src';
import AIcon from './components/icon';
import ALayoutBox from './components/layout-box/src';
import ALayoutDefault from './components/layout-default/src';
import ALayoutDefaultContent from './components/layout-default-content/src';

// router
import waterRouter from './routers';

// vuex
import waterStores from './stores';

// axios
import createAxios from './axios';
import defHttp from './apis';

import { AppRouteRecordRaw as AppRouteRecordRaw2 } from './routers/types';

// water
export {
  waterPro,
};

// router
export * from './routers/types';
export { LAYOUT_DEF, LAYOUT_BOX } from './routers/constant';
export { PAGE_NOT_FOUND_ROUTE } from './routers/configs/routers';
export declare interface AppRouteRecordRaw extends AppRouteRecordRaw2 {}
export interface AppRouteModule extends AppRouteRecordRaw {}

// vuex
export {
  waterStores,
};
export { setupStore } from './stores';

// axios
export {
  createAxios,
  defHttp,
};

// components
export default (app: App<Element>) => {
  app.component('AForbidden', AForbidden);
  app.component('ANotPage', ANotPage);
  app.component(AIcon.name, AIcon);
  app.component('ALayoutBox', ALayoutBox);
  app.component(ALayoutDefault.name, ALayoutDefault);
  app.component('ALayoutDefaultContent', ALayoutDefaultContent);
};

// router
export {
  waterRouter
};

// hooks
export { useMessage } from './hooks/use-message';
export * from './hooks/use-page';
export { useScrollTo } from './hooks/use-scroll-to';

export * from './env';
export { error } from './log';

// utils
export * from './utils/props';
export * from './utils/cookie';
export * from './utils/account';

// constant
export * from './constant';
