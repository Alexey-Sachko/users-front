const merge = require('webpack-merge');
const config = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
  ]
})