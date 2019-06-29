const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    watchContentBase: true,
    compress: true,
    open: true,
    hot: true,
    port: 3000
  }
})