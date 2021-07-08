import type { App } from 'vue';

import waterPro from '@fe6/water-pro';
import '@fe6/water-pro/dist/water.css';

export default (app: App<Element>) => {
  app.use(waterPro);
};
