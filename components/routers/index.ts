/** @format */

import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import { createGuard } from './guards';

// app router
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
  createGuard(router);
}

// router.onError((error) => {
//   console.error(error);
// });

export default router;
