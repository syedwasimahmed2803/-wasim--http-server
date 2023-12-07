const { http } = require("./httpConfig");

function createServer() {
  const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    // Load the appropriate handler based on the pathname
    let handler;
    if (pathname.startsWith("/delay/") && req.method === "GET") {
      handler = require("./Get/delay");
    } else if (pathname === "/uuid" && req.method === "GET") {
      handler = require("./Get/uuid");
    } else if (pathname === "/json" && req.method === "GET") {
      handler = require("./Get/json");
    } else if (pathname === "/html" && req.method === "GET") {
      handler = require("./Get/html");
    } else if (pathname.startsWith("/status/") && req.method === "GET") {
      handler = require("./Get/status");
    } else {
      handler = require("./Get/notFound");
    }
    handler(req, res);
  });

  return server;
}

module.exports = createServer;
