const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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

const generateConfig = (isProd) => ({
  devtool: 'source-map',
  context: __dirname,
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
    contentBase: path.resolve(__dirname, './src/public'),
    publicPath: '/',
    open: true,
    proxy: {
      '/public/*': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/public': '' },
      },
    },
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.html'],
    alias: {
      containers: path.resolve(__dirname, './src/containers/'),
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants'),
      utils: path.resolve(__dirname, './src/utils'),
      sass: path.resolve(__dirname, './src/sass'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.s[c]ss$/i,
        exclude: /node_modules/,
        use: [
          // fallback to style-loader in development
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|css|woff(2)?|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProd ? 'production' : 'development'
      ),
    }),
    ...[
      isProd
        ? [
            new CopyPlugin({
              patterns: [{ from: 'src/public', to: 'public' }],
            }),
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
          ]
        : [],
    ],
  ],
  optimization: isProd
    ? {
        flagIncludedChunks: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
          cacheGroups: {
            // match the entry point and spit out the file named here
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              test: 'vendor',
              filename: 'vendor.js',
              enforce: true,
            },
          },
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
      }
    : {},
});

module.exports = (env, argv) => {
  return generateConfig(argv.mode === 'production');
};
