var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      `${path.resolve(__dirname, 'common')}/main`,
    ],
  },
  output: {
    path: '/asset/js/bundle/',
    filename: 'bundle.js',
    publicPath: '/asset/js/bundle/',
    chunkFilename: 'chunk.[id].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.resolve(__dirname, 'common'),
        exclude: /node_modules/,
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy'],
        }
      },
      {
        test: /\.json?$/,
        use: 'json-loader',
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
          'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
          'postcss',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader?limit=8192&name=./asset/img/[name].[ext]',
      },
      {
        test: /\.js?$/,
        use: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'], // stage-0 use for class static needsApi
        include: path.resolve(__dirname, 'common'),
      },
    ],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.LoaderOptionsPlugin({
      options: { postcss: [autoprefixer] },
    }),
  ],
};

// 'webpack': '^1.14.0',
