const createServer = require("./createServer");
const server = createServer();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
