class TouchEvent {
  constructor() {
    this.events = new Map();
    this.times = 0; //点击次数
    this.visible = false;
    this.keep = false;    //是否保持长点击状态
  }

  //事件注册器，只注册事件，对事件不做处理
  on(eventType, callback){
    if (!this.events.get(eventType)) this.events.set(eventType, callback)
  }

  //处理事件：调用相应的注册器来处理事件，这里的处理就是简单执行注册器的回调函数
  emit(eventType, args){
    if (this.events.get(eventType)) this.events.get(eventType)(args);
  }

  off(eventType){
    if (this.events.get(eventType)) return this.events.delete(eventType)
  }

}
const touchEvent = new TouchEvent();
export {touchEvent};