const path = require('path');
const pkg = require('../../package.json');
const { parseAndWrite } = require('./lib/index.js');
const rootPath = path.resolve(__dirname, '../../');

try {
  parseAndWrite({
    version: pkg.version,
    name: 'types',
    path: path.resolve(rootPath, './examples/docs'),
    // default match lang
    test: /zh-CN\.md/,
    outputDir: path.resolve(rootPath, './vetur'),
    tagPrefix: 'a-',
  });
  console.log('generator types success');
} catch (e) {
  console.error('generator types error', e);
}
