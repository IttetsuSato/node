function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// fulfilledFirst
Promise.race([
  wait(1000).then(() => 1),
  wait(2000).then(() => 2),
  wait(3000).then(() => 3),
]).then((value) => console.log("fulfilledFirst", value));

// rejectedFirst
Promise.race([
  wait(3000).then(() => 1),
  wait(2000).then(() => 2),
  wait(1000).then(() => {
    throw new Error("error");
  }),
]).catch((err) => console.error("rejectedFirst", err));

// notPromise
Promise.race([
  wait(1000).then(() => 1),
  2,
  wait(3000).then(() => {
    throw new Error("error");
  }),
]).then((value) => console.log("notPromise", value));

// タイムアウト関数の実装
function withTimeout(promise, timeout) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout),
    ),
  ]);
}

const promise = new Promise((resolve) =>
  setTimeout(() => resolve("done!"), 2000),
);
withTimeout(promise, 1000).catch((err) => console.error("should timeout", err));
withTimeout(promise, 3000).then((value) => console.log("should resolved", value));
