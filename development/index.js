import Menu from './menu.vue'
import touchListener from './touch-directive'

const plugin = {
  install(Vue, options) {
    const __defaultOption = {
      useTouchDirective: true,
      touchDirectiveName: "tap",
      useGlobalComponent: true,  //默认设置为全局组件
      globalComponentName: "vue-mouse-menu"
    }
    const config = Object.assign(__defaultOption, options);

    //是否开启v-tap指令
    if (config.useTouchDirective) {
      Vue.directive(config.touchDirectiveName, touchListener)
    }
    if (config.useGlobalComponent) {
      Vue.component(config.globalComponentName, Menu)
    }
  }
}

export {plugin as default, Menu}