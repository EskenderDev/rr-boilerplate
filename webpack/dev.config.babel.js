import { CONFIG, APP_PATH } from './config';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import { resolve } from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default merge({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9999',
    'webpack/hot/only-dev-server',
    resolve(APP_PATH, 'hot-reload'),
  ],

  output: {
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[local]__[path][name]__[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader'
      }],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: `${ APP_PATH }/template.html`,
      favicon: `${ APP_PATH }/assets/images/favicon.ico`
    }),

    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css'
    }),
  ],

  performance: {
    hints: false,
  },

  devServer: {
    historyApiFallback: true,
    contentBase: APP_PATH,
    publicPath: '/',
    openPage: '',
    inline: true,
    noInfo: false,
    open: true,
    port: 9999,
    hot: true,

    stats: {
      errorDetails: true,
      publicPath: false,
      children: false,
      warnings: true,
      version: true,
      modules: false,
      timings: true,
      reasons: false,
      colors: true,
      assets: true,
      chunks: false,
      source: false,
      errors: true,
      hash: true,
    },
  },
}, CONFIG);
