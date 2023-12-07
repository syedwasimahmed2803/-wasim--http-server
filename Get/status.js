const { url } = require("../httpConfig");

function handleStatus(req, res) {
  const statusCode = parseInt(url.parse(req.url).pathname.split("/").pop(), 10);
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(`Status Code : ${statusCode}`);
}

module.exports = handleStatus;
