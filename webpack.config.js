const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const META = {
  title: 'Jim Lin',
  description: 'Looking for a senior Front-End develop? Here you go!',
  imageUrl: 'https://jimlin94.github.io/avatar.jpg',
  siteUrl: 'https://jimlin94.github.io',
  type: 'website',
  siteName: "Jim's resume",
  locale: 'en-US',
  author: 'Jim Lin',
};

const config = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    contentBase: path.resolve(__dirname, './src/public'),
    publicPath: '/',
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
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js',
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
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader'
      // }
    ],
  },
  plugins: [
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
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = '';
    config.optimization = {
      namedModules: false,
      namedChunks: false,
      flagIncludedChunks: true,
      occurrenceOrder: true,
      sideEffects: true,
      usedExports: true,
      concatenateModules: true,
      splitChunks: {
        hidePathInfo: true,
        minSize: 30000,
      },
      noEmitOnErrors: true,
      checkWasmTypes: true,
      minimize: true,
    };

    config.plugins = [
      ...config.plugins,
      new TerserPlugin({
        parallel: true,
        chunkFilter: () => true,
        terserOptions: {
          ecma: 6,
          output: {
            comments: false,
          },
        },
      }),
      new CopyPlugin([{ from: 'src/public', to: 'public' }]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ];
    config.module.rules[2].use[0] =  MiniCssExtractPlugin.loader;
  } else {
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ];
    config.devtool = 'source-map';
  }

  return config;
};
