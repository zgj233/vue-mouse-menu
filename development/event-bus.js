class TouchEvent {
  constructor() {
    this.events = {};
    this.times = {}; //点击次数
    this.visible = {};
    this.keep = {};    //是否保持长点击状态
  }

  //事件监听器，只监听事件，对事件不做处理
  on(eventType, target, callback) {
    const aim = this.events[target];

    !aim.get(eventType) ?
      aim.set(eventType, callback) :
      console.warn(`你已经对source=${target} 的vue-mouse-menu 监听过 ${eventType} 事件了`)
    return this
  }

  //处理事件：调用相应的监听器来处理事件，这里的处理就是简单执行监听器的回调函数
  emit(eventType, target, args) {
    const aim = this.events[target];

    aim.get(eventType) ?
      aim.get(eventType)(args) :
      console.warn(`你还没有对source=${target} 的vue-mouse-menu 监听 ${eventType} 事件`);
    return this
  }

  off(eventType) {
    const aim = this.events[target];

    aim.get(eventType) ?
      aim.delete(eventType) :
      console.warn(`你对source=${target} 的vue-mouse-menu 删除的 ${eventType} 事件不存在`)
    return this
  }

}

const touchEvent = new TouchEvent();
export {touchEvent};