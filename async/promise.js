function parseJSONAsync(json) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(json));
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
}

const toBeFulfilled = parseJSONAsync('{"foo": 1}');
const toBeRejected = parseJSONAsync('{"foo": 1');

console.log("promise.js is executed");
console.log(toBeFulfilled);
console.log(toBeRejected);
setTimeout(() => {
  console.log("1 second later");
  console.log(toBeFulfilled);
  console.log(toBeRejected);
}, 1000);

const asyncFunction = () =>
  new Promise((resolve, reject) => {
    //
  });

function promiseFunction() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}
