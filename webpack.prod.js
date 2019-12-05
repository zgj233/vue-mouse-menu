const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
module.exports = merge(common, {
  entry: {
    index: path.resolve(__dirname, 'development/index.js'),
  },
  output: {
    filename: "[name].js",                    //输出多个entry对应的文件
    path: path.resolve(__dirname, 'dist'),    //输出位置
    library: "vueMouseMenu",
    libraryTarget: "umd",         //以umd的方式导出library
    libraryExport: 'default'      //将入口处的默认导出，分配给libraryTarget
  },
  //将vue设置为外部必须有的依赖，但是不把它打包到项目里面，即让用户自己去安装vue
  externals: ['vue'],

  plugins:[
    new BundleAnalyzerPlugin()    //启动bundle可视化分析插件
  ],
  mode: 'production',
})