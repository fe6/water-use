/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';
import type { ViteEnv } from '../utils';

import html from 'vite-plugin-html';

import { GLOB_CONFIG_FILE_NAME } from '../constant';

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_PUBLIC_PATH } = env;

  const path = '/'.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;

  const getAppConfigSrc = () => {
    return `${path || '/'}${GLOB_CONFIG_FILE_NAME}?v=${Math.random()}-${new Date().getTime()}`;
  };

  const getIconSrc = () => {
    return {
      tag: 'script',
      attrs: {
        src: 'https://sf1-hscdn-tos.pstatp.com/obj/iconpark/icons_1363_9.5d49d87063523e8b7765a60e9a353654.js',
      },
    };
  };

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      injectData: {
        title: 'water pro',
      },
      // Embed the generated app.config.js file
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
            getIconSrc(),
          ]
        : [
          getIconSrc(),
        ],
    },
  });
  return htmlPlugin;
}
