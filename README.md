### vue-mouse-menu 2.0
>Support multi-terminal run of the pop-up menu plug-in
#### Features
1. Support PC and mobile
2. Can be invoked directly by custom instructions
3. Supports import in vue-cli and traditional `<script>` intro
4. Using webpack4 and vue2.6 results in a smaller package, with the entire plug-in only 9kb
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

#### [See Example](https://github.com/zgj233/vue-mouse-menu/tree/master/example)

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
</script>

```
**[FULL Example](https://github.com/zgj233/vue-mouse-menu/tree/master/dist-test)**

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
**[FULL Example](https://github.com/zgj233/vue-mouse-menu/tree/master/example)**

* * *
#### Configuration
> It have default value, you can ignore it if there is no special need

**Configuration items when the plug-in is loading**
`vue.use(menu, objectOptions)`
*objectOptions:*

| variable | explain | Type | default |
| --- | --- | --- | --- |
| useTouchDirective | Whether to enable`v-tap`directive | Boolean | true |
| touchDirectiveName | rename`v-tap`directive | String | tap |
| useGlobalComponent | Set`<vue-mouse-menu>`to the global component | Boolean | true |
| globalComponentName | rename`<vue-mouse-menu>`component | String | vue-mouse-menu |

**Custom directive options**
`v-tap="tapOptions"`
*tapOptions:*

| variable | explain | Type | default |
| --- | --- | --- | --- |
| tap | listening touch type | double/single/longPress | double |
| interval | use to determine the maximum effective time interval for the double-click operation, Valid only at `tap='double'` | Number | 500 |
| timekeep | use to determine the minimum effective time interval for the long-press operation, Valid only at `tap='longPress'` | Number | 1000 |
| preventSelectTxt | prevent select text from the phone when in touch operation | Boolean | true |
| preventTouchNative | whether to prevent native touch events | Boolean | false |

**vue-mouse-menu props:**

| variable | explain | Type | default |
| --- | --- | --- | --- |
| mouse | Mouse click event | Object | — |
| visible | Show/hide `vue-mouse-menu` component | Boolean | false |
| option | About the Settings of the pop-up box | Object | see below |

**`vue-mouse-menu.props.option`**

| variable | explain | Type | default |
| --- | --- | --- | --- |
| className | The CSS class name of the pop-up box that defines the style of the pop-up box | String | — |
| preventNativePOP | Prevents native mouse menus popping up | Boolean | true |
| pointx | Pop-up box upper left corner anchor point, relative to the horizontal distance of the click position | Number | 0 |
| pointy | Pop-up box upper left corner anchor point, relative to the vertical distance of the click position | Number | 0 |

**😄Please give me a star⭐**