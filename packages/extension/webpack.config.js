const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    popup: './src/popup.js',
    background: './src/background.js',
    api: './src/api/index',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({
      patterns: [
        { from: './manifest.json' },
        { from: './src/images', to: 'images' },
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'options'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Popup',
      template: './src/popup.html',
      filename: 'popup.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};
