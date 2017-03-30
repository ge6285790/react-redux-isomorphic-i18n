var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    `${path.resolve(__dirname, 'client')}/index`,
  ],
  output: {
    path: '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/asset/js/bundle/',
    chunkFilename: 'chunk.[name].js',
  },
  reslove: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      common: './common/',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'common'),
        ],
        exclude: /node_modules/,
        // query: {
        //     presets: ["es2015", "stage-0", "react"],
        //     plugins: ["transform-decorators-legacy"],
        // }
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.css|\.scss$/,
        loaders: [
          'style',
          'css',
          'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
          'postcss',
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: 'url-loader?limit=8192&name=../public/img/[name].[ext]',
      },
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-decorators-legacy'], //stage-0 use for class static needsApi
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'common'),
        ],
        // query: {
        //     presets: ["es2015", "stage-0", "react"],
        //     plugins: ["transform-decorators-legacy"],
        // }
      },
    ],
  },
  postcss: [
    autoprefixer,
    flexibility,
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
}
