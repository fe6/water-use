/** @format */

import type { App } from 'vue';
import {
  StoreOptions,
  createStore,
  createLogger, Plugin
} from 'vuex';

import { ref, computed } from 'vue';
import { merge } from 'lodash-es';

import { isDevMode } from '../env';

import app from './mods/app';
import external from './mods/external';

const isDev = isDevMode();
const plugins: Plugin<any>[] = isDev ? [createLogger()] : [];

const storeObject = ref<any>(null);

const store = (params: StoreOptions<Recordable>) => createStore(
  merge({
    modules: {
      app,
      external,
    },
    strict: isDev,
    plugins,
  },
  params,
  ));

export function setupStore(app: App<Element>, params: StoreOptions<Recordable>) {
  storeObject.value = store(params);
  app.use(storeObject.value);
}

export default computed(() => storeObject.value);
