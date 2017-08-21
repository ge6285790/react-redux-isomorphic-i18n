const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      `${path.resolve(__dirname, 'client')}/index`,
    ],
  },
  output:
  {
    path: '/assets/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/assets/js/bundle/',
    chunkFilename: 'chunk.[id].js',
  },
  module:
  {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel',
        // include: path.resolve(__dirname, 'common'),
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre', ['es2015', { modules: false }], 'stage-0', 'react'],
          // presets: [['es2015', { modules: false }], 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy'],
        },
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style',
          {
            loader: 'css',
            options: {
              options: { modules: false },
            },
          },
          // 'sass?outputStyle=compressed',
          // 'postcss',
          // 'style',
          // 'css',
          // 'sass?outputStyle=compressed',
          'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
          'postcss',
          // {
          //   loader: 'postcss',
          //   // options: {
          //   //   plugins: function () {
          //   //     return [autoprefixer, flexibility];
          //   //   },
          //   // },
          //   options: {
          //     config: {
          //       path: 'postcss.config.js',
          //     },
          //   },
          // },

        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader?limit=8192&name=./asset/img/[name].[ext]',
      },
    ],
    exprContextCritical: false,
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    // new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } })
  ],
};
