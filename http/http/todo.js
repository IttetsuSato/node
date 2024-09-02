const http = require("http");

const todos = [
  { id: 1, title: "Learn JavaScript", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Build a React app", completed: false },
];

const server = http
  .createServer((req, res) => {
    if (req.url === "/api/todos") {
      if (req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(todos));
      }

      res.statusCode = 405; // Method Not Allowed
    } else {
      res.statusCode = 404; // Not Found
    }
    res.end();
  })
  .listen(3000);

http
  .request("http://localhost:3000/api/todos", (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => console.log(JSON.parse(data)));
  })
  .end();
