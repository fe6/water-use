#!/usr/bin/env node

/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const packageInfo = require('../package.json');

function generateVersionFile() {
  if (fs.existsSync(path.join(__dirname, '../lib'))) {
    // Build package.json version to lib/version/index.js
    // prevent json-loader needing in user-side
    const versionFilePath = path.join(process.cwd(), 'lib', 'version', 'index.js');
    const versionFileContent = fs.readFileSync(versionFilePath).toString();
    fs.writeFileSync(
      versionFilePath,
      versionFileContent.replace(
        `require('../../package.json')`,
        `{ version: '${packageInfo.version}' }`,
      ),
    );
    console.log('Wrote version into lib/version/index.js');
  }
}

// We need compile additional content for water user
function finalizeCompile() {
  if (fs.existsSync(path.join(__dirname, '../lib'))) {
    // Build a entry less file to dist/water.less
    const componentsPath = path.join(process.cwd(), 'components/components');
    let componentsLessContent = '';
    // Build components in one file: lib/style/components.less
    fs.readdir(componentsPath, (err, files) => {
      files.forEach(file => {
        if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
          componentsLessContent += `@import "../${path.join(file, 'style', 'index.less')}";\n`;
        }
      });
      fs.writeFileSync(
        path.join(process.cwd(), 'lib', 'style', 'components.less'),
        componentsLessContent,
      );
    });
  }
}

function finalizeDist() {
  if (fs.existsSync(path.join(__dirname, '../dist'))) {
    // Build less entry file: dist/water.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'water-use.less'),
      '@import "../lib/style/index.less";\n',
    );
    // eslint-disable-next-line no-console
    console.log('Built a entry less file to dist/water-use.less');
  }
}

generateVersionFile();
finalizeCompile();
finalizeDist();
