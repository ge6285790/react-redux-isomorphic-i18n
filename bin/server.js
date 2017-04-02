require("babel-register");
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
global.__DEVELOPMENT__ = process.env.NODE_ENV !== false;

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools'))
.development(__DEVELOPMENT__)
.server(rootDir, () => {
  require('../server/index');
});
