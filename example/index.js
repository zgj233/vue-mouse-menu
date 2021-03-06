//@ is an alias for __dirname
import Vue from 'vue'
import App from './app.vue'
import menu from '@/development/index'
Vue.config.productionTip = false;
Vue.use(menu, {
  directiveName: "xixi"    //给 v-tap指令重命名为 v-xixi
});

new Vue({
  render: h => h(App)
}).$mount('#app')