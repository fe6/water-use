import { App } from 'vue';

// water
import waterPro from './water';

// components
import WForbidden from './components/forbidden/Forbidden.vue';
import WNotPage from './components/not-page/NotPage.vue';
import AIcon from './components/icon';
import WLayoutBox from './components/layout-box/LayoutBox.vue';
import WLayoutDefault from './components/layout-default/LayoutDefault.vue';
import WLayoutDefaultContent from './components/layout-default-content/LayoutDefaultContent.vue';
import WLayoutSimpleContent from './components/layout-simple-content/LayoutSimpleContent.vue';

// router
import waterRouter, { setupRouter } from './routers';

// vuex
import waterStores from './stores';

// axios
import createAxios from './axios';
import defHttp from './apis';

import { AppRouteRecordRaw as AppRouteRecordRaw2 } from './routers/types';

export {
  WForbidden,
  WNotPage,
  AIcon,
  WLayoutBox,
  WLayoutDefault,
  WLayoutDefaultContent,
  WLayoutSimpleContent,
};

// water
export {
  waterPro,
};

// router
export * from './routers/types';
export { LAYOUT_DEF, LAYOUT_BOX, LAYOUT_SIMPLE, LAYOUT_INNER } from './routers/constant';
export { PAGE_NOT_FOUND_ROUTE } from './routers/configs/routers';
export declare interface AppRouteRecordRaw extends AppRouteRecordRaw2 {}
export declare interface AppRouteModule extends AppRouteRecordRaw {}

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
  app.component('WForbidden', WForbidden);
  app.component('WNotPage', WNotPage);
  app.component(AIcon.name, AIcon);
  app.component('WLayoutBox', WLayoutBox);
  app.component(WLayoutDefault.name, WLayoutDefault);
  app.component('WLayoutDefaultContent', WLayoutDefaultContent);
};

// router
export {
  waterRouter,
  setupRouter
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
