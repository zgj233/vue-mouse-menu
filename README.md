### vue-mouse-menu 2.0
>Support multi-terminal run of the pop-up menu plug-in
#### Features
1. Support PC and mobile
2. Can be invoked directly by custom directive
3. Supports import in vue-cli and traditional `<script>` intro
4. Using webpack4 and vue2.6 results in a smaller package
5. There are no dependencies other than Vue

#### [中文文档](https://github.com/zgj233/vue-mouse-menu/blob/master/README.zh.md)

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

[Demo]()

**Simple use in Vue-cli project**
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
          target: "app",          //Corresponding to the 'source' parameter of vue-mouse-menu, required!
          eventType: "single",    //The type of which event to listen for, required!
                                  //List of ( single / double / longPress / mouseClick )
        },
        visible: false
      }
    }
  }
</script>
```

**[FULL Example](https://github.com/zgj233/vue-mouse-menu/tree/master/example)**

* * *

**Use in HTML**
```html
···
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--Copy dist/index.js to your project-->
<script src="dist/index.js"></script>
<script>
    /* dist/index.js will exposes a vueMouseMenu variable*/
    Vue.use(vueMouseMenu)
    new Vue({
        //···
    })
    
    //The same as vue-cli project's code
</script>

```
**[FULL Example](https://github.com/zgj233/vue-mouse-menu/tree/master/dist-test)**

* * *

#### Default Configuration
> The default configuration of `vue-mouse-menu` is shown below

**Configuration items when the plug-in is loading**
```javascript
// in main.js
   import Vue from 'vue'
   import App from './app.vue'
   import menu from 'vue-mouse-menu' 
   Vue.config.productionTip = false;

   Vue.use(menu, {
     directiveName: 'tap',    //rename v-tap directive
     useGlobalComponent: true,    //whether set <vue-mouse-menu> to the global component
     globalComponentName: 'vue-mouse-menu'    //rename <vue-mouse-menu> component	
   });
   
   new Vue({
       render: h => h(App)
   }).$mount('#app')
```

**Directive options and The props of `vue-mouse-menu`**
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
            eventType: "",    //The type of which event to listen for, required! List of ( single / double / longPress / mouseClick )
            target: "",       //Corresponding to 'source' parameter, required!
            interval: 500,    //Use to determine the maximum time interval for the effective double-touch operation, Valid only at eventType='double'
            timekeep: 1000,   //Use to determine the minimum time interval for the effective long-press operation, Valid only at eventType='longPress'	
            preventTouchNative: false,    //Whether to prevent native touch events
            preventSelectTxt: true,       //Prevent select text from the phone when in touch operation
            preventNativePOP: true,       //Prevent native mouse menus popping up from pc
          },
          
          menuOption: {
            className: '',    //The CSS class name of the pop-up box that defines the style of the pop-up box
            pointx: 0,        //Pop-up box upper left corner anchor point, relative to the horizontal distance of the click position
            pointy: 0,        //Pop-up box upper left corner anchor point, relative to the vertical distance of the click position
          },
        }
      },
      //···
    }
</script>
```

**😄Please give me a star⭐**

## [License](/#license)
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2017-present, zgj233