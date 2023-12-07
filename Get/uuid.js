const { uuidv4 } = require("../httpConfig");

function handleUuid(req, res) {
  const generateUuid = uuidv4();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ uuid: generateUuid }));
}

module.exports = handleUuid;
