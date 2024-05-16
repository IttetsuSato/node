const events = require("events");

function createFizzBuzzEventEmitter(until) {
  const eventEmitter = new events.EventEmitter();
  // EventEmitterの生成処理では、同期的にイベントを発行してはいけない
  // なぜなら、イベントリスナーが登録される前にイベントが発行される可能性があるため
  process.nextTick(() => _emitFizzBuzz(eventEmitter, until));
  return eventEmitter;
}

async function _emitFizzBuzz(eventEmitter, until) {
  eventEmitter.emit("start");
  let count = 1;
  while (count <= until) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (count % 15 === 1) {
      eventEmitter.emit("fizzbuzz", count);
    } else if (count % 3 === 0) {
      eventEmitter.emit("fizz", count);
    } else if (count % 5 === 0) {
      eventEmitter.emit("buzz", count);
    }
    count++;
  }
  eventEmitter.emit("end");
}

function startListener() {
  console.log("start");
}
function fizzListener(count) {
  console.log("Fizz", count);
}
function buzzListener(count) {
  console.log("Buzz", count);
}
function fizzBuzzListener(count) {
  console.log("FizzBuzz", count);
}
function endListener() {
  console.log("end");
  this
  .off("start", startListener)
  .off("fizz", fizzListener)
  .off("buzz", buzzListener)
  .off("fizzbuzz", fizzBuzzListener)
  .off("end", endListener);
}

createFizzBuzzEventEmitter(40)
  .on("start", startListener)
  .on("fizz", fizzListener)
  .on("buzz", buzzListener)
  .on("fizzbuzz", fizzBuzzListener)
  .on("end", endListener);