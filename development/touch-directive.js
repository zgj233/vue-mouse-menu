import {touchEvent} from './event-bus'

function __emitTap(type, target, event) {
  let pageX = event.changedTouches[0].pageX;
  let pageY = event.changedTouches[0].pageY;
  touchEvent.emit(type, target, [Math.floor(pageX), Math.floor(pageY)])
}

function __preventSelectTxtCss(el) {
  el.style["-webkit-touch-callout"] = "none"
  el.style["-webkit-user-select"] = "none"
  el.style["-khtml-user-select"] = "none"
  el.style["-moz-user-select"] = "none"
  el.style["-ms-user-select"] = "none"
  el.style["user-select"] = "none"
  return el
}

function __dealTapEvent(el, option) {

  const key = option.target;

  el.addEventListener('touchend', (event) => {
    if (option.eventType === "single") return __emitTap('single', key, event);

    if (option.eventType === "double") {
      //如果面板已经弹出
      if (touchEvent.visible[key]) {
        touchEvent.emit("close", key);
        return
      }

      touchEvent.times[key] += 1;
      setTimeout(() => {
        touchEvent.times[key] = 0
      }, option.interval);
      if (touchEvent.times[key] === 2) return __emitTap('double', key, event)
    }

    if (option.eventType === "longPress") {
      touchEvent.keep[key] = false
      window.clearTimeout(timer2longPress);
    }

  })

  el.addEventListener('touchstart', (event) => {
    if (option.preventTouchNative) event.preventDefault();

    if (option.preventSelectTxt) __preventSelectTxtCss(el);

    if (option.eventType === "longPress") {
      touchEvent.emit("close", key);
      touchEvent.keep[key] = true;

      timer2longPress = setTimeout(() => {
        if (touchEvent.keep[key]) __emitTap('longPress', key, event)
      }, option.timekeep)
    }
  })

}

function __dealMouseEvent(el, option) {

  el.addEventListener('mousedown', (event) => {
    document.body.oncontextmenu = () => !option.preventNativePOP;     //阻止鼠标原生菜单弹出
    if (event.button === 0) {
      touchEvent.emit('close', option.target, event)
    }
    if (event.button === 2) {
      let {pageX: x, pageY: y} = event;
      touchEvent.emit('mouseClick', option.target, [Math.floor(x), Math.floor(y)])
    }
  })
}


let timer2longPress;

export default {
  bind(el, binding, vnode, oldVnode) {
    const config = {
      interval: 500,      //默认时间间隔，只有double 的时候有用
      timekeep: 1000,     //默认时间长短，只有longPress 的时候有用
      preventNativePOP: true,       //默认阻止原生鼠标右键弹出菜单
      preventTouchNative: false,    //默认不阻止原生手机端的touch事件
      preventSelectTxt: true,       //默认阻止手机端长按选中文字
    }
    const {value: usrOption} = binding;
    const myOption = Object.assign(config, usrOption);
    if (!myOption.eventType) throw new Error(`全局指令${binding.rawName} 缺少必须的eventType参数`);

    const key = myOption.target;
    if (!key) throw new Error(`全局指令${binding.rawName} 缺少必须的target参数`);

    if (touchEvent.events[key]) throw new Error(`全局指令${binding.rawName} 的target=${key} 已经被使用了，请给target重新换一个参数`);
    touchEvent.events[key] = new Map();
    touchEvent.times[key] = 0;
    touchEvent.keep[key] = false;
    touchEvent.visible[key] = false;

    myOption.eventType === 'mouseClick' ? __dealMouseEvent(el, myOption) : __dealTapEvent(el, myOption);
  }
}

