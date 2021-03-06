const PUBLICPATH = '/';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|ts|jsx|tsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
      query: { compact: false },
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[hash:7].[ext]',
      },
    },
    {
      test: /\.css$/,
      use: [
        //'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: PUBLICPATH,
          },
        },
        'css-loader',
      ],
    },
  ],
};
