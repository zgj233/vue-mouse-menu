const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      '@': __dirname,
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader']
      },

      // 普通的 `.scss` 文件和 `*.vue` 文件中的`<style lang="scss">`块都应用它
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          "sass-loader",
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,      //对node_modules文件夹下的js 不进行babel-loader 的转译
        loader: "babel-loader"        //要使babel-loader生效,还需要在项目下面创建一个.babelrc文件
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20        //对20kb 大小的文件使用url base64 内联，超出的用file-loader 加载
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20
            }
          }
        ]
      },
      {
        test: /\.vue$/,               //对.vue 文件使用 vue-loader
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),      //使用CleanWebpackPlugin清理webpack之前打包的文件, 这会清除 dist/index.js
    new VueLoaderPlugin(),            //vue-loader 须要使用的插件
  ]
}