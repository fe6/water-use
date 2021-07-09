/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */

import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const pwaPlugin = styleImport({
    libs: [
      {
        libraryName: 'em-normalize',
        esModule: true,
        resolveStyle: () => 'em-normalize/dist/em-normalize.scss',
      },
      {
        libraryName: '@fe6/water-pro',
        esModule: true,
        resolveStyle: (name) => {
          return `@fe6/water-pro/es/${name}/style/index`;
        },
      },
    ],
  });
  return pwaPlugin;
}
