/** @format */

import { Router } from 'vue-router';

// import { createProgressGuard } from './progress';
import { createPageLoadingGuard } from './page-loading';
// import { createTitleGuard } from './title';
// import { createMessageGuard } from './message';
// import { createScrollGuard } from './scroll';
// import { createHttpGuard } from './http';
// import { createStateGuard } from './state';
// import { createNavGuard } from './nav';

export function createGuard(router: Router) {
  createPageLoadingGuard(router);
  // createNavGuard(router);
  // createHttpGuard(router);
  // createScrollGuard(router);
  // createMessageGuard(router);
  // createTitleGuard(router);
  // createProgressGuard(router);
  // createStateGuard(router);
}
