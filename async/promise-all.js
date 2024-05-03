const perf_hooks = require("node:perf_hooks");

const allResolved = Promise.all([
  1,
  Promise.resolve(2),
  Promise.resolve(3),
]).then((res) => console.log(res));

const someRejected = Promise.all([
  1,
  Promise.reject("最初のエラー"),
  Promise.resolve(3),
]).catch((err) => console.log(err));

function asyncFunc() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const start = perf_hooks.performance.now();

// 逐次実行
asyncFunc()
  .then(asyncFunc)
  .then(asyncFunc)
  .then(asyncFunc)
  .then(asyncFunc)
  .then(() => console.log("逐次実行:", perf_hooks.performance.now() - start));

// 並行実行
Promise.all([
  asyncFunc(),
  asyncFunc(),
  asyncFunc(),
  asyncFunc(),
  asyncFunc(),
]).then(() => console.log("並列実行: ", perf_hooks.performance.now() - start));
