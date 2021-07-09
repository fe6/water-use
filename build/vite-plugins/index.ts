import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';

import { ViteEnv } from '../utils';
import { configHtmlPlugin } from './html';
import { configStyleImportPlugin } from './styleImport';
// import { configHtmlTempPlugin } from './html-temp';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, isLib?: boolean) {
  const { VITE_APP_SITE } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue({
      include: isLib ? [/\.vue$/] : [/\.vue$/, /\.md$/], // <--
    }),
    // have to
    vueJsx(),
  ];

  // vite-plugin-html
  if (!isLib) {
    vitePlugins.push(Markdown());
    vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  }


  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  // The following plugins only work in the production environment
  // if (isBuild) {
    //vite-plugin-imagemin
    // VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
  //   vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS));
  // }

  return vitePlugins;
}
