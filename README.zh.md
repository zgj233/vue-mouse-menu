### vue-mouse-menu 2.0
>支持多端调用的弹出悬浮菜单插件
#### 特性
1. 支持PC和手机端
2. 可通过自定义指令直接调用
3. 支持 vue-cli 工程内引入和 传统`<script>`引入
4. 使用webpack4 和 vue2.6，打包更小
5. 除了Vue之外无其它依赖项

[English Document](https://github.com/zgj233/vue-mouse-menu/blob/master/README.md)

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

**[在线展示](https://codesandbox.io/s/vue-mouse-menu-demo-by-zgj233-vw37r)**

* * *

**vue-cli 工程里面使用**
```javascript
// in main.js
import Vue from 'vue'
import App from './app.vue'
import menu from 'vue-mouse-menu' 
Vue.config.productionTip = false;
Vue.use(menu);
new Vue({
    render: h => h(App)
}).$mount('#app')
```

```vue
//in app.vue
<template>
  <div id="app" v-tap="option" style="width: 1000px; height: 1000px">
    ···
  </div>
  
  <vue-mouse-menu source="app" :visible.sync="visible">
    <div>
      ···
    </div>
  </vue-mouse-menu>
</template>

<script>
  export default {
    data(){
      return{
        option:{
          target: "app",          //对应 vue-mouse-menu 的source 参数, required!
          eventType: "single",    //你要监听的事件类型, required!
                                  //事件类型列表 ( single / double / longPress / mouseClick )
        },
        visible: false
      }
    }
  }
</script>
```

**[完整示例](https://github.com/zgj233/vue-mouse-menu/tree/master/example)**

* * *

**传统HTML里面使用**
```html
···
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--将 dist/index.js  拷贝到你的项目里面-->
<script src="dist/index.js"></script>
<script>
    /* dist/index.js 会暴露一个 vueMouseMenu 变量*/
    Vue.use(vueMouseMenu.default)
    new Vue({
        //···
    })
    
    //然后就同vue-cli项目里相同的使用方法
</script>

```
**[完整示例](https://github.com/zgj233/vue-mouse-menu/tree/master/dist-test)**

* * *


#### 默认配置
> 下面展示的是 `vue-mouse-menu` 的默认配置

**插件载入时的配置项**
```javascript
// in main.js
   import Vue from 'vue'
   import App from './app.vue'
   import menu from 'vue-mouse-menu' 
   Vue.config.productionTip = false;

   Vue.use(menu, {
     directiveName: 'tap',    //重命名 v-tap 指令
     globalComponentName: 'vue-mouse-menu'    //重命名 <vue-mouse-menu> 组件
   });
   
   new Vue({
       render: h => h(App)
   }).$mount('#app')
```

**指令的配置项和 `vue-mouse-menu` props 的配置项**
```vue
//  in vue component
<template>
  <div id="app" v-tap="directiveOption">
    ···
  </div>
  
  <vue-mouse-menu :visible.sync="visible" source="one" option="menuOption">
    ···
  </vue-mouse-menu>
</template>

<script>
  export default {
      name: "doubleTap",
      data() {
        return {
          visible: false,
          directiveOption:{   
            eventType: "",    //你要监听的事件类型, required! 包含以下选项：single / double / longPress / mouseClick
            target: "",       //对应 vue-mouse-menu 的 'source' 参数, required!
            interval: 500,    //有效双击事件最大的时间间隔, 只在 eventType='double' 时有效
            timekeep: 1000,   //有效长按事件最小的时间间隔, 只在 eventType='longPress' 时有效
            preventTouchNative: false,    //是否阻止原生的touch 事件
            preventSelectTxt: true,       //是否阻止touch 事件时选中文字
            preventNativePOP: true,       //是否阻止原生鼠标右键弹出菜单
          },
          
          menuOption: {
            className: '',    //自定义 vue-mouse-menu 的 css 样式名
            pointx: 0,        //弹出菜单左上角锚点，离点击位置的水平距离
            pointy: 0,        //弹出菜单左上角锚点，离点击位置的垂直距离
          },
        }
      },
      //···
    }
</script>
```

**😄老铁点个星星⭐**

## License
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2017-present, zgj233