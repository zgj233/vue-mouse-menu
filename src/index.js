import Vue from 'vue'
import rightMenu from './rightMenu.vue'
const plugin = {
    install (Vue, options){
        Vue.component('RightMenu', rightMenu)
    }
}

export default plugin
