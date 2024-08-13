const events = require("events");

// リスナが存在しない状態でerrorイベントをemitするとエラーが投げられる。
// リスナが登録されている場合はエラーが投げられず、リスナが呼び出される。
try {
  new events.EventEmitter()
    // .on("error", (err) => console.log("Error occurred:", err.message))
    .emit("error", new Error("Something went wrong"));
} catch (err) {
  console.error("Caught:", err.message);
}
