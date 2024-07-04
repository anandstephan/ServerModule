const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Shraddha Kapoor</h1>");
  res.end();
});

server.listen(8000, () => console.log("Server is running"));

// const arr = [1, 2, 3, 4];
// arr.forEach((item) => console.log(item));
