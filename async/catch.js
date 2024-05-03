// then()を2引数で実行するパターン
asyncFunc1()
  .then(
    asyncFunc2, // onFulfilled
    (err) => console.error(err), // onRejected
  )
  .then(
    (result) => {
      // ここで発生したエラーは第二引数でハンドリングされない
    }, // onFulfilled
    (err) => console.error(err), // onRejected
  );

// catch()を使うパターン
asyncFunc1()
  .then(asyncFunc2)
  .then((result) => {
    // ここで発生したエラーはcatch()でハンドリングされる
  })
  .catch((err) => console.error(err));
