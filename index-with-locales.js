const water = require('./components');
const req = require.context('./components', true, /^\.\/locale-provider\/(?!__tests__).+_.+\.ts$/);

water.locales = {};

req.keys().forEach(mod => {
  const match = mod.match(/\/([^/]+).js$/);
  water.locales[match[1]] = req(mod).default;
});

module.exports = water;
