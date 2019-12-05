<template>
  <div v-if="visible" :class="menuClass" :style="menuSty" ref="menu">
    <slot></slot>
  </div>
</template>

<script>
  import {touchEvent} from '@/development/event-bus'

  export default {
    props: {
      mouse: {},
      option: {
        type: Object,
      },
      visible: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    data() {
      return {
        menuSty: '',
        defaultOption: {
          className: '',    //用户自定义的类名
          preventNativePOP: true,   //是否阻止鼠标原生菜单弹出
          pointx: 0,    //离鼠标锚点的横间距
          pointy: 0,    //离鼠标锚点的纵间距
        },
      }
    },
    computed: {
      menuClass() {
        return `__css ${this.config.className}`
      },
      config() {
        return Object.assign(this.defaultOption, this.option)
      },
    },
    watch: {
      mouse() {
        const self = this;
        self.$nextTick(() => {
          self.mouseClick()
        })
      },
      "visible"() {
        const self = this;
        touchEvent.visible = self.visible;
        document.body.oncontextmenu = () => !self.config.preventNativePOP;     //阻止鼠标原生菜单弹出
      },
    },
    methods: {
      mouseClick() {
        const self = this;
        let {layerX: x, layerY: y} = self.mouse;
        self.$nextTick(() => {
          let p = __computePosition(x, y, self);
          self.menuSty = `left: ${p.x_point}px; top: ${p.y_point}px;`
        })
      },
      doTap(position) {
        const self = this;
        //若面板执行关闭操作，则不进行后续操作
        if (self.visible){
          self.$emit("update:visible", false)
          return;
        }

        self.$emit("update:visible", true)

        self.$nextTick(() => {
          let p = __computePosition(position[0], position[1], self);
          self.menuSty = `left: ${p.x_point}px; top: ${p.y_point}px;`
        })
      },
    },
    created() {
      const self = this;
      touchEvent.on('single', position => self.doTap(position))
      touchEvent.on('double', position => self.doTap(position))
      touchEvent.on('longPress', position => self.doTap(position))
      touchEvent.on('close', () => {
        self.$emit("update:visible", false);
      })
    }
  }

  function __computePosition(x, y, self) {
    const _root = document.documentElement;
    const allHeight = _root.offsetHeight;    //整个网页的高度
    const allWidth = _root.offsetWidth;      //整个网页的宽度

    let x_point, y_point;
    let el = self.$refs.menu;
    let mX = x + self.config.pointx;
    let mY = y + self.config.pointy;

    x_point = (mX + el.clientWidth) <= allWidth ? mX : (allWidth - el.clientWidth - 5);
    y_point = (mY + el.clientHeight) <= allHeight ? mY : (allHeight - el.clientHeight - 5);
    return {x_point: x_point, y_point: y_point}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .__css {
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px #aaa;
    position: absolute;
    z-index: 10;
    background-color: #F5F5F5;
    box-sizing: border-box;
  }
</style>
