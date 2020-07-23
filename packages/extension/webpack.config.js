const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    popup: './src/extension/index.js',
    background: './src/extension/background.js',
    init: './src/init.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({
      patterns: [
        { from: './manifest.json' },
        { from: './images', to: 'images' },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Popup',
      template: './src/extension/index.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};
