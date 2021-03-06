const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { $PUBLIC } = require('./alias');

module.exports = {
  devServer: {
    hot: true,
    contentBase: $PUBLIC,
    publicPath: '/',
    inline: true,
    host: 'localhost',
    port: 8889,
    clientLogLevel: 'warning',
    compress: true,
    open: true,
    overlay: { warnings: true, errors: true },
    historyApiFallback: true,
    disableHostCheck: true,
    noInfo: true,
    openPage: 'proto',
    proxy: {
      '/api': {
        target: '',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  // optimization: {
  //   minimize: true,
  //   namedModules: true,
  //   noEmitOnErrors: true,
  //   concatenateModules: true,
  //   mangleWasmImports: true,
  //   removeAvailableModules: true,
  //   removeEmptyChunks: true,
  //   mergeDuplicateChunks: true,
  //   usedExports: true,
  //   runtimeChunk: {
  //     name: 'manifest',
  //   },
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~',
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //       },
  //       default: { minChunks: 2, priority: -20, reuseExistingChunk: true },
  //     },
  //   },
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: true, //Use multi-process parallel running to improve the build speed
  //       sourceMap: true, //Use source maps to map error message locations to modules
  //       //https://github.com/terser/terser#minify-options
  //       terserOptions: {
  //         mangle: true, //false to skip mangling names
  //         compress: {
  //           //drop_console: true, //Pass true to discard calls to console.* functions
  //         },
  //       },
  //     }),
  //   ],
  // },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
  devtool: 'inline-source-map',
};
