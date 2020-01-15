import Menu from './menu.vue'
import touchListener from './touch-directive'

const plugin = {
  install(Vue, options) {
    const __defaultOption = {
      directiveName: "tap",
      useGlobalComponent: true,  //默认设置为全局组件
      globalComponentName: "vue-mouse-menu"
    }
    const config = Object.assign(__defaultOption, options);
    Vue.directive(config.directiveName, touchListener);

    if (config.useGlobalComponent) {
      Vue.component(config.globalComponentName, Menu)
    }
  }
}

export {plugin as default, Menu}