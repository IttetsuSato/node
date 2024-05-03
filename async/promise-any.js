
// 最初にfulfilledになった値を返す
Promise.any([
  1,
  Promise.reject("error"),
  Promise.resolve(3),
]).then((res) => console.log(res));

// すべてのPromiseインスタンスがrejectedになった場合はAggregateErrorを返す
Promise.any([
  Promise.reject("error1"),
  Promise.reject("error2"),
  Promise.reject("error3"),
]).catch((err) => console.error(err));
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'error1', 'error2', 'error3' ]
// }
