!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueMouseMenu=t():e.vueMouseMenu=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(5).default)("c7be2ea8",o,!1,{})},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".__css[data-v-2b75287e]{border:1px solid #ddd;box-shadow:2px 2px 2px #aaa;position:absolute;z-index:10;background-color:#F5F5F5;box-sizing:border-box}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var s,a,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var a=e[s];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return this.visible?t("div",{ref:"menu",class:this.menuClass,style:this.menuSty},[this._t("default")],2):this._e()};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}o._withStripped=!0;var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.times={},this.visible={},this.keep={}}var t,n,o;return t=e,(n=[{key:"on",value:function(e,t,n){var o=this.events[t];return o.get(e)?console.warn("你已经对source=".concat(t," 的vue-mouse-menu 监听过 ").concat(e," 事件了")):o.set(e,n),this}},{key:"emit",value:function(e,t,n){var o=this.events[t];return o.get(e)?o.get(e)(n):console.warn("你还没有对source=".concat(t," 的vue-mouse-menu 监听 ").concat(e," 事件")),this}},{key:"off",value:function(e){var t=this.events[target];return t.get(e)?t.delete(e):console.warn("你对source=".concat(target," 的vue-mouse-menu 删除的 ").concat(e," 事件不存在")),this}}])&&r(t.prototype,n),o&&r(t,o),e}());function s(e,t,n){var o=document.documentElement,r=o.offsetHeight,i=o.offsetWidth,s=n.$refs.menu,a=e+n.config.pointx,u=t+n.config.pointy;return{x_point:a+s.clientWidth<=i?a:i-s.clientWidth-8,y_point:u+s.clientHeight<=r?u:r-s.clientHeight-8}}var a={props:{option:{type:Object},visible:{type:Boolean,default:!1,required:!0},source:{type:String,required:!0}},data:function(){return{menuSty:"",defaultOption:{className:"",pointx:0,pointy:0}}},computed:{menuClass:function(){return"__css ".concat(this.config.className)},config:function(){return Object.assign(this.defaultOption,this.option)}},watch:{visible:function(){i.visible[this.source]=this.visible}},methods:{doTap:function(e){var t=this;t.visible?t.$emit("update:visible",!1):(t.$emit("update:visible",!0),t.$nextTick((function(){var n=s(e[0],e[1],t);t.menuSty="left: ".concat(n.x_point,"px; top: ").concat(n.y_point,"px;")})))},doMouseClick:function(e){var t=this;t.$emit("update:visible",!0),t.$nextTick((function(){var n=s(e[0],e[1],t);t.menuSty="left: ".concat(n.x_point,"px; top: ").concat(n.y_point,"px;")}))}},created:function(){var e=this;i.events[e.source]&&(i.on("mouseClick",e.source,(function(t){return e.doMouseClick(t)})),i.on("single",e.source,(function(t){return e.doTap(t)})),i.on("double",e.source,(function(t){return e.doTap(t)})),i.on("longPress",e.source,(function(t){return e.doTap(t)})),i.on("close",e.source,(function(){e.$emit("update:visible",!1)})))}};n(1);var u=function(e,t,n,o,r,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}(a,o,[],!1,null,"2b75287e",null);u.options.__file="development/menu.vue";var c,l=u.exports;function f(e,t,n){var o=n.changedTouches[0].pageX,r=n.changedTouches[0].pageY;i.emit(e,t,[Math.floor(o),Math.floor(r)])}var p={bind:function(e,t,n,o){var r=t.value,s=Object.assign({interval:500,timekeep:1e3,preventNativePOP:!0,preventTouchNative:!1,preventSelectTxt:!0},r);if(!s.eventType)throw new Error("全局指令".concat(t.rawName," 缺少必须的eventType参数"));var a=s.target;if(!a)throw new Error("全局指令".concat(t.rawName," 缺少必须的target参数"));if(i.events[a])throw new Error("全局指令".concat(t.rawName," 的target=").concat(a," 已经被使用了，请给target重新换一个参数"));i.events[a]=new Map,i.times[a]=0,i.keep[a]=!1,i.visible[a]=!1,"mouseClick"===s.eventType?function(e,t){e.addEventListener("mousedown",(function(e){if(document.body.oncontextmenu=function(){return!t.preventNativePOP},0===e.button&&i.emit("close",t.target,e),2===e.button){var n=e.pageX,o=e.pageY;i.emit("mouseClick",t.target,[Math.floor(n),Math.floor(o)])}}))}(e,s):function(e,t){var n=t.target;e.addEventListener("touchend",(function(e){if("single"===t.eventType)return f("single",n,e);if("double"===t.eventType){if(i.visible[n])return void i.emit("close",n);if(i.times[n]+=1,setTimeout((function(){i.times[n]=0}),t.interval),2===i.times[n])return f("double",n,e)}"longPress"===t.eventType&&(i.keep[n]=!1,window.clearTimeout(c))})),e.addEventListener("touchstart",(function(o){t.preventTouchNative&&o.preventDefault(),t.preventSelectTxt&&function(e){e.style["-webkit-touch-callout"]="none",e.style["-webkit-user-select"]="none",e.style["-khtml-user-select"]="none",e.style["-moz-user-select"]="none",e.style["-ms-user-select"]="none",e.style["user-select"]="none"}(e),"longPress"===t.eventType&&(i.emit("close",n),i.keep[n]=!0,c=setTimeout((function(){i.keep[n]&&f("longPress",n,o)}),t.timekeep))}))}(e,s)}};n.d(t,"default",(function(){return d})),n.d(t,"Menu",(function(){return l})),n.d(t,"touchDirective",(function(){return p}));var d={install:function(e,t){var n=Object.assign({directiveName:"tap",globalComponentName:"vue-mouse-menu"},t);e.directive(n.directiveName,p),e.component(n.globalComponentName,l)}}},function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,l=function(){},f=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,r){c=n,f=r||{};var s=o(e,t);return h(s),function(t){for(var n=[],r=0;r<s.length;r++){var a=s[r];(u=i[a.id]).refs--,n.push(u)}t?h(s=o(e,t)):s=[];for(r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(c)return l;o.parentNode.removeChild(o)}if(d){var r=u++;o=a||(a=m()),t=x.bind(null,o,r,!1),n=x.bind(null,o,r,!0)}else o=m(),t=_.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function _(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),f.ssrId&&e.setAttribute(p,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));