const webpack = require('webpack');
const merge = require('webpack-merge');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const PUBLICPATH = '/';
const BUILD_DIR = path.resolve(ROOT, 'dist/');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./alias');
const modules = require('./modules');

const baseConfig = {
  entry: {
    app: ['@babel/polyfill/noConflict', APP_DIR + '/index.js'],
  },
  output: {
    path: BUILD_DIR,
    publicPath: PUBLICPATH,
    filename: `js/[name].js?v=[hash]`,
    chunkFilename: `js/chunk.[name].js?v=[hash]`,
  },
  module: modules,
  plugins: [
    new webpack.DefinePlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],

  resolve: {
    alias,
    extensions: ['*', '.js', '.jsx', '.json', '.css', '.tsx', '.ts'],
  },
  performance: {
    hints: false,
  },
  node: {
    fs: 'empty',
  },
};

module.exports = (env, argv) => {
  let target = {};

  let { type } = argv;

  /* 로컬 모드 */
  if (type === 'LOCAL') {
    target = require('./webpack.config.local');
  } else {
    console.log('NOT Build type!!');
    return;
  }

  // 압축 파일

  const CompressionPlugin = require('compression-webpack-plugin');
  baseConfig.plugins.push(new CompressionPlugin());

  return merge(baseConfig, target);
};
