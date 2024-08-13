const events = require("events");

// const barEventEmitter = new events.EventEmitter();
// for (let i = 0; i < 11; i++) {
//   barEventEmitter.on("bar", () => console.log("bar"));
// }
// > MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
// 11 bar listeners added to [EventEmitter]. Use emitter.setMaxListeners() to increase limit
// 一つのイベントに登録されたリスナーが10を超えると、MaxListenersExceededWarningが発生する

const messageEventEmitter = new events.EventEmitter();

{
  const listener = () => console.log("Hello");
  messageEventEmitter.on("message", listener);
}

// listenerの参照が残っており、ブロックが終了してもGCの対象にならない
console.log(messageEventEmitter.listeners("message"));

// EventEmitterインスタンスに登録されたリスナーが蓄積すると、メモリリークの原因になる

const bazEventEmitter = new events.EventEmitter();
bazEventEmitter.setMaxListeners(20);
for (let i = 0; i < 11; i++) {
  bazEventEmitter.on("baz", () => console.log("baz"));
}
