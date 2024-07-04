const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log("HMMM", req.url);
  if (req.url === "/") {
    const url = path.join(__dirname, "public", "index.html");
    fs.readFile(url, "utf8", (err, data) => {
      if (err) console.log("error", err);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }
});

server.listen(8000, () => console.log("Server is running"));
