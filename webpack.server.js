const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server-dist'),
    filename: 'index.js',
  },
  resolve: commonConfig.resolve,
  module: commonConfig.module,
  plugins: commonConfig.plugins,
};
