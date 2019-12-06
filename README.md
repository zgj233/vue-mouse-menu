### vue-mouse-menu 2.0
>Support multi-terminal run of the pop-up menu plug-in
#### 特性
1. 多端支持
2. 可通过自定义指令一键调用
3. 支持 v-cli 工程内引入和 传统`<script>`引入
4. 使用webpack4 和 vue2.6，打包更小，整个插件9kb
5. 除了Vue之外无其它依赖项

![demonstration](https://github.com/zgj233/vue-mouse-menu/blob/master/touch.gif)

* * *
**Download**
```bash
npm install vue-mouse-menu
```
or copy dist/index.js into your html
```html
<script src="dist/index.js"></script>
```

* * *

**Use in HTML**
```html
···
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--将 dist/index.js  拷贝到你的项目里面-->
<script src="dist/index.js"></script>
<script>
    /* dist/index.js 会暴露一个 vueMouseMenu 变量*/
    Vue.use(vueMouseMenu)
    new Vue({
        ···
    })
</script>

```
**[More Example](https://github.com/zgj233/vue-mouse-menu/tree/master/dist-test)**

* * *

**Use in Vue project**
```javascript
import Vue from 'vue'
import App from './app.vue'
import menu from 'vue-mouse-menu' 
Vue.config.productionTip = false;
Vue.use(menu);
new Vue({
    render: h => h(App)
}).$mount('#app')

```
**[More Example](https://github.com/zgj233/vue-mouse-menu/tree/master/example)**

* * *
#### 配置(都有默认值，你可以不用管)  Configuration
**载入插件配置项 vue.use(menu, objectOptions)**
*objectOptions:*

| 变量名 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useTouchDirective | 是否启用v-tap指令 | Boolean | true |
| touchDirectiveName | 重命名v-tap指令 | String | tap |
| useGlobalComponent | 将<vue-mouse-menu>设为全局组件 | Boolean | true |
| globalComponentName | 重命名<vue-mouse-menu> | String | vue-mouse-menu |

**指令配置项  v-tap="tapOptions"**
*tapOptions:*

| 变量名 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tap | 监听的touch类型 | double/single/longPress | double |
| interval | 用于判断双击操作有效的最长时间间隔，只在tap='double'时有效 | Number | 500 |
| timekeep | 用于判断长按操作有效的最短时间间隔，只在tap='longPress'时有效 | Number | 1000 |
| preventSelectTxt | 在touch时阻止选取手机上面的文字 | Boolean | true |
| preventTouchNative | 是否阻止原生touch事件 | Boolean | false |

**vue-mouse-menu props:**

| 变量名 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mouse | 鼠标点击事件 | Object | — |
| visible | 显示/隐藏 vue-mouse-menu 组件 | Boolean | false |
| option | 关于弹出框的设置 | Object | 见下面 |

option的各个设置
*vue-mouse-menu.props.option:*

| 变量名 | 解释 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 弹出框的css类名，用于定义弹出框的样式 | String | — |
| preventNativePOP | 阻止原生鼠标菜单弹出 | Boolean | true |
| pointx | 弹出框左上角锚点，相对点击位置的横距离 | Number | 0 |
| pointy | 弹出框左上角锚点，相对点击位置的纵距离 | Number | 0 |

**⭐老铁点个星星**