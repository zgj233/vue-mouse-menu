# context-menu

> A right-mouse menu plug-in for Vue.js 2+

![demonstration](https://github.com/zgj233/vue-mouse-menu/blob/master/GIF.gif)

## Before run

``` bash
Note if you installed vue2.0 and This is belong to the SPA plug-in
```

## How to Use
```cmd
 npm install vue-mouse-menu --save
```
```javascript
 import mouseMenu from 'vue-mouse-menu'

 import Vue from 'vue'

 Vue.use(mouseMenu)
```

## Where you want to use ,just like ···

```html
<template>
<div class="row">
    <div class="col-md-12">
        <p> some info ···</p>
        <table @mousedown="popMenu($event)">
            ···
        </table>
        <right-menu :pop-items="popItems" :mouse="mousePosition" @ListItemClick="list_item_click">
        </right-menu>
        <!--这里使用了RightMenu 组件-->
        <!--Here use RightMenu components-->
    </div>
</div>
</template>

<script>
  export default{
    name: 'alarmList',
    data(){
      return {
        //定义右键的弹出菜单
        //Define the right-click popup menu
        popItems:[
          {
            class:'fa fa-wrench',
            txt:'处理异常'
          },
          {
            class:'fa fa-check',
            txt:'已解决'
          },
          {
            class:'fa fa-ban',
            txt:'已忽略'
          }
        ],
        mousePosition:[],
      }
    },
    methods: {
      popMenu(e){
        let self = this;
        e.preventDefault();
        if(e.button ===2){
          let x = e.layerX;
          let y = e.layerY;
          self.mousePosition = [x, y];
        }
        else if(e.button ===0){
          self.mousePosition = ['close'];
        }
      },
      list_item_click(it){
        switch (it){
          case 0:
            alert('第一项被点击');
                break;
          case 1:
            alert('第二项被点击');
                break;
        }
      }
    },
  }
</script>
```
