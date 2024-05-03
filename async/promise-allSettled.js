Promise.allSettled([
  1,
  Promise.reject("error"),
  Promise.resolve(3),
]).then((res) => console.log(res));

// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'error' },
//   { status: 'fulfilled', value: 3 }
// ]