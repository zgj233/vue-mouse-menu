# context-menu

> A right-mouse menu plug-in for Vue.js 2+

![demonstration](https://github.com/zgj233/vue-mouse-menu/blob/master/GIF.gif)

## Before run

``` bash
This component needs Bootstrap and fontawesome. By default you have installed these.
If not, you can still run, but the style will not look good.

这个组件建议各位老铁先安装了Bootstrap 和 fontawesome, 如果你没有安装，运行还是能够运行，
但是样子就会变得很丑。

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
>**<right-menu></right-menu>** Is the only component currently. You can not only just choose it,
but also must be written to.

## Insert the custom element
>vue-mouse-menu has two [slot](https://cn.vuejs.org/v2/guide/components.html#使用-Slot-分发内容) witch named 'above' and 'below'.
'above': The element will be inserted at the top of the list.
'below': The element will be inserted at the bottom of the list.
See the example below.

## vue-mouse-menu is data-driven So···
> When 'mouse' option changes, the menu automatically calculates where it should appear and pops up.
So it's not necessarily a mouse change.Any change to 'mouse' option will trigger the pop-up menu.
See something cool.

```html
<template>
 <div class="row">
  <div class="col-md-12">
   <right-menu :pop-items="popItems" :mouse="mousePosition" width="300px" height="400px"
                     boxShadow="2px 2px 2px #617C58" background="#8BB381" color="#eee" borderRadius="10px"
                     @ListItemClick="list_item_click">
           <img src="./bj.jpg" class="img-box" slot="above" />
           <textarea class="form-control" rows="5" slot="below"></textarea>
         </right-menu>

         <div>
           <button class="btn btn-default" @click="pop($event)">
             点击 弹出
           </button>
         </div>
  </div>
 </div>
</template>

<script>
    export default{
        data(){
          return {
            //右键的弹出菜单
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
            mousePosition:['close'],
          }
        },
        methods: {
          pop(e){
            let self = this;
            let btn = e.toElement;
            let x, y;
            if(self.mousePosition[0] !== 'close'){
              self.mousePosition = ['close'];
            }
            else {
              x = btn.offsetLeft + btn.offsetWidth;
              y = btn.offsetTop + btn.offsetHeight;
              self.mousePosition = [x, y]
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
        }
      }
</script>
```
>And you will get

![demonstration2](https://github.com/zgj233/vue-mouse-menu/blob/master/GIF2.gif)

## option
<table>
        <thead>
          <tr>
            <td>属性</td>
            <td>含义</td>
            <td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>popItems</td>
            <td>菜单里的列表项, 若为空，将不会有列表被渲染出来</td>
            <td> - </td>
          </tr>
          <tr>
            <td>mouse</td>
            <td>菜单出现的位置， 锚点是菜单的左上角</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              width, height, border,
              padding, background, color,
              boxShadow, borderRadius,zIndex
            </td>
            <td>CSS样式有连接符号 - 的需转化为驼峰形式, 这些CSS属性在使用时须带单位</td>
            <td>
              border: 1px solid #ddd;
              width: 150px;
              padding: 5px 10px;
              box-shadow: 2px 2px 2px #aaa;
              position: absolute;
              z-index: 10;
              background: #eee
            </td>
          </tr>
        </tbody>
</table>