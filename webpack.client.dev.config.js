var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');
var fs = require('fs');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}


var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

// Since we use .babelrc for client and server, and we don't want HMR enabled on the server, we have to add
// the babel plugin react-transform-hmr manually here.

// make sure react-transform is enabled
babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
var reactTransform = null;
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i];
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin;
  }
}

if (!reactTransform) {
  reactTransform = ['react-transform', {transforms: []}];
  babelLoaderQuery.plugins.push(reactTransform);
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], {transforms: []});
}

// make sure react-transform-hmr is enabled
reactTransform[1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module']
});

module.exports = {
  // devtool: 'inline-source-map',
  // context: path.resolve(__dirname),
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    `${path.resolve(__dirname, 'client')}/index`,
  ],
  output: {
    path: '/assets/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/assets/js/bundle/',
    chunkFilename: 'chunk.[name].js',
  },
  // reslove: {
  //   extensions: ['', '.js', '.jsx'],
  //   alias: {
  //     common: './common/',
  //   },
  // },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js?$/,
  //       loader: 'babel',
  //       include: [
  //         path.resolve(__dirname, 'client'),
  //         path.resolve(__dirname, 'common'),
  //       ],
  //       exclude: /node_modules/,
  //       // query: {
  //       //     presets: ["es2015", "stage-0", "react"],
  //       //     plugins: ["transform-decorators-legacy"],
  //       // }
  //     },
  //     {
  //       test: /\.json?$/,
  //       loader: 'json-loader',
  //     },
  //     // {
  //     //   test: /\.css|\.scss$/,
  //     //   loaders: [
  //     //     'style',
  //     //     'css',
  //     //     'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
  //     //     'postcss',
  //     //   ],
  //     // },
  //     // // { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
  //     // {
  //     //   test: /\.(jpg|png|gif|svg)$/i,
  //     //   loader: 'url-loader?limit=8192&name=../public/img/[name].[ext]',
  //     // },
  //     { test: /\.less$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap' },
  //    { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
  //    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
  //    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
  //    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
  //    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
  //    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
  //    { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
  //     {
  //       test: /\.js?$/,
  //       loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-decorators-legacy'], // stage-0 use for class static needsApi
  //       include: [
  //         path.resolve(__dirname, 'client'),
  //         path.resolve(__dirname, 'common'),
  //       ],
  //       // query: {
  //       //     presets: ["es2015", "stage-0", "react"],
  //       //     plugins: ["transform-decorators-legacy"],
  //       // }
  //     },
  //   ],
  // },
  // // postcss: [
  // //   autoprefixer,
  // //   flexibility,
  // // ],
  // progress: true,
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': '"development"',
  //   }),
  //   webpackIsomorphicToolsPlugin.development()
  // ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel?' + JSON.stringify(babelLoaderQuery)]},// , 'eslint-loader'
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.less$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap' },//___[hash:base64:5]
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },//___[hash:base64:5]
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
    ]
  },
  progress: true,
  resolve: {
    // modulesDirectories: [
    //   'src',
    //   'node_modules'
    // ],
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      common: './common/',
    },
  },
  plugins: [
    // hot reloads
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
    }),
    webpackIsomorphicToolsPlugin.development()
  ]
}
