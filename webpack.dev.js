/*此webpack配置文件用于在application文件夹下启动webpack-dev-server*/
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    index: path.resolve(__dirname, 'example/index.js'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example'),
    host: '0.0.0.0',
    port: 7040,
    hot: true,
    open: true,
    openPage: 'http://localhost:7040/index.html',     //打开浏览器显示哪一个页面
    clientLogLevel: 'warning'        //开发工具(DevTools)的控制台(console)只显示警告和错误信息
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({         //使用HtmlWebpackPlugin生成html文件
      title: "example",
      message: "Here's how example/index.html works",
      template: path.resolve(__dirname, 'example/index.html'),
    }),
  ],
  mode: "development"
})