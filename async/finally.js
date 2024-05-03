// 正常系ではPromiseインスタンスが解決される値に影響しない
const returnValueInFinally = Promise.resolve(1).finally(() => 2);
setTimeout(
  () => console.log(returnValueInFinally), // => Promise<1>
  0,
);

// 異常系ではPromiseインスタンスに影響する
const throwErrorInFinally = Promise.resolve(1).finally(() => {
  throw new Error("error");
});
setTimeout(
  () => console.log(throwErrorInFinally), // => Promise<rejected>
  0,
);

// finally()のコールバック関数が非同期処理を含む場合、コールバックのPromiseインスタンスがsettledになるまで待つ
Promise.resolve(1).finally(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("finally");
      resolve();
    }, 1000);
  });
});
