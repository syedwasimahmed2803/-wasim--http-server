const { url } = require("../httpConfig");

function handleDelay(req, res) {
  const delay = parseInt(url.parse(req.url).pathname.split("/").pop(), 10);
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Success Message updated after ${delay} second(s)`);
  }, delay * 1000);
}

module.exports = handleDelay;
