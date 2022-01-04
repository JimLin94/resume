const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const META = {
  title: 'Jim Lin',
  description: 'Looking for a Front-End developer?',
  imageUrl: 'https://jimlin94.github.io/avatar.jpg',
  siteUrl: 'https://jimlin94.github.io',
  type: 'website',
  siteName: "Jim's resume",
  locale: 'en-US',
  author: 'Jim Lin',
};

const config = {
  devtool: 'eval-cheap-module-source-map',
  context: __dirname,
  target: 'web',
  entry: {
    client: ['./src/index.tsx'],
    vendor: ['react', 'react-dom', 'classnames'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, './src/public'),
      publicPath: '/',
    },
    proxy: {
      '/public/*': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/public': '' },
      },
    },
  },
  resolve: commonConfig.resolve,
  module: commonConfig.module,
  plugins: [
    ...commonConfig.plugins,
    new webpack.ids.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      title: META.title,
      meta: {
        description: META.description,
      },
      image: META.imageUrl,
      type: META.type,
      siteUrl: META.siteUrl,
      siteName: META.siteName,
      locale: META.locale,
      author: META.author,
    }),
  ],
};

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  if (isProd) {
    config.plugins = [
      ...config.plugins,
      ...[
        new CopyPlugin({
          patterns: [{ from: 'src/public', to: 'public' }],
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
    ];
    config.optimization = {
      flagIncludedChunks: true,
      sideEffects: true,
      usedExports: true,
      concatenateModules: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: 'vendor',
            filename: 'vendor.js',
            enforce: true,
          },
        },
      },
      checkWasmTypes: true,
      minimize: true,
      minimizer: [new TerserPlugin()],
    };
  } else {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      })
    );
  }

  return config;
};
