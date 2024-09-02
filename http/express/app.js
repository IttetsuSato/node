const express = require("express");
const app = express();

app.use("/api/todos", require("./todos"));

app.listen(3000);
