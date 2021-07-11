import type { App } from 'vue';

import waterPro from '@fe6/water-pro';
import '@fe6/water-pro/dist/water.css';

import 'moment/dist/locale/zh-cn';

export default (app: App<Element>) => {
  app.use(waterPro);
};
