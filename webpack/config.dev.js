import path from 'path';
import webpack from 'webpack';
import moment from 'moment';
import AutoDllPlugin from 'autodll-webpack-plugin';

import cssLoader from './css-loader';
import postcssLoader from './postcss-loader';

const rootPath = path.resolve(process.cwd());
const distPath = path.join(rootPath, 'public', 'dist');
const clientPath = path.join(rootPath, 'src', 'client');
const publicPath = '/dist/';

export default {
  cache: true,
  context: clientPath,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './index.js',
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath,
    pathinfo: true,
    publicPath,
    // chunkFilename: '[id].js',
  },

  resolve: {
    modules: [
      clientPath,
      path.join(rootPath, 'node_modules'),
    ],
    extensions: [
      '.js',
      '.json',
      '.scss',
      '.css',
    ],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        }
      },
      {
        test: /\.js?$/,
        include: [
          clientPath,
        ],
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                'react',
                'stage-3',
                ['es2015', {modules: false}],
              ],
              plugins: [
                'transform-runtime',
                'react-hot-loader/babel',
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          cssLoader,
          postcssLoader,
        ],
      },
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new AutoDllPlugin({
      debug: true,
      context: rootPath,
      filename: '[name].dll.js',
      entry: {
        vendor: [
          'babel-polyfill',
          'history',
          'moment',
          'prop-types',
          'react',
          'react-dom',
          'react-redux',
          'react-router',
          'react-router-dom',
          'react-router-redux',
          'redux',
          'redux-logger',
          'redux-thunk',
        ],
      },
      plugins: [
        new webpack.ContextReplacementPlugin(
          // The path to directory which should be handled by this plugin
          /moment[\/\\]locale/,
          // A regular expression matching files that should be included
          /(en-gb|ru)\.js/
        ),
      ],
    }),
    function () {
      // I want to see time of latest build!
      this.plugin('done', () => console.log('Build ended:', moment().format('HH:mm:ss')));
    },
  ]
};
