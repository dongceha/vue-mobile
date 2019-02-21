var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill','./src/main.js'],                     // 项目的入口文件
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, '../dist/'),  // 项目的打包路径
    publicPath: '/dist/',                     // 通过 devServer 访问路径
    filename: 'build.js'                      // 打包后的文件名
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: '就是测试用的vue',
      inject: false
    })
  ],
  // 提供虚拟 服务器，并且实时加载，需要自己下载 webpack-dev-server
  devServer: {
    historyApiFallback: true,   // 若 true 则页面出错不会弹出 404 页面
    overlay: true
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less/,  // 解析 less
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /iview\/.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/
      },
      {
        test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'less': [
              'vue-style-loader',
              'css-loader',
              'less-loader'
            ],
            'css': [
              'vue-style-loader',
              'css-loader'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    port: 7070
  }
};