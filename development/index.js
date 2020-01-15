import Menu from './menu.vue'
import touchListener from './touch-directive'

const plugin = {
  install(Vue, options) {
    const __defaultOption = {
      directiveName: "tap",
      globalComponentName: "vue-mouse-menu"
    }
    const config = Object.assign(__defaultOption, options);
    Vue.directive(config.directiveName, touchListener);

    Vue.component(config.globalComponentName, Menu)
  }
}

export {plugin as default, Menu, touchListener as touchDirective}