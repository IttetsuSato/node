const express = require("express");
const router = express.Router();

const todos = [
  { id: 1, title: "Learn JavaScript", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a React app", completed: false },
];

router
  .route("/")
  .get((req, res) => {
    const completedFilter = req.query.completed; // Expressなら、req.query.completedでクエリパラメータを取得できる
    const filteredTodos = completedFilter
      ? todos.filter((todo) => todo.completed.toString() === completedFilter)
      : todos;
    res.json(filteredTodos);
  })
  .post(() => console.log("post /"));

router.route("/:id(\\d+)").get((req, res) => {
  const todo = todos.find((todo) => todo.id === Number(req.params.id)); // Expressなら、req.params.idでパスパラメータを取得できる
  if (!todo) {
    res.statusCode = 404;
    return res.end();
  }
  return res.json(todo);
});

module.exports = router;
