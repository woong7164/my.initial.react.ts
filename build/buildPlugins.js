const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin({
    verbose: true,
  }),
  new HtmlWebpackPlugin({
    filename: 'mindex.html',
    template: 'index.html',
    inject: true,
    mode: 'production',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
    chunksSortMode: 'dependency',
  }),
  new CopyWebpackPlugin([{ from: 'public' }]),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
];
