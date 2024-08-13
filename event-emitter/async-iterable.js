const events = require("events");

const eventAEmitter = new events.EventEmitter();

// async iterableの生成
const eventAIterable = events.on(eventAEmitter, "eventA"); // events.on()で内部的にエミッターにリスナーを登録して、asyncイテレータを返す

(async () => {
  for await (const a of eventAIterable) {
    if (a[0] === "end") {
      break;
    }
    console.log("eventA:", a);
  }
})();

eventAEmitter.emit("eventA", "Hello");
eventAEmitter.emit("eventA", "World", "World");
eventAEmitter.emit("eventA", "end");

const eventBEmitter = new events.EventEmitter();
const eventBPromise = events.once(eventBEmitter, "eventB"); // events.once()で内部的にエミッターにリスナーを登録して、Promiseを返す
eventBPromise.then((arg) => console.log("eventB:", arg));
eventBEmitter.emit("eventB", "Hello", "World");
