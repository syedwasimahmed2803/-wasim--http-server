const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "html.html"));
});
app.get("/json", (req, res) => {
  res.sendFile(path.join(__dirname, "json.json"));
});
app.get("/delay", (req, res) => {
  res.send(`Please enter a number in the URL for the delay response page`);
});

app.get("/delay/:delay", (req, res) => {
  const seconds = req.params.delay;
  if (!isNaN(seconds)) {
    setTimeout(() => {
      res.send(
        `Success Message updated after <span style="font-size:25px;font:weight:800">${seconds}</span> second(s)`
      );
    }, seconds * 1000);
  } else {
    res.send(`Please enter a number in the URL for the delay response page`);
  }
});
app.get("/status", (req, res) => {
  res.send(`Please enter a valid Status Code to go to the Status Code page`);
});
app.get("/status/:status", (req, res) => {
  const statusCode = req.params.status;
  if (!isNaN(statusCode)) {
    res
      .status(statusCode)
      .send(
        `Status Code : <span style="font-size:25px;font:weight:800">${statusCode}</span>`
      );
  } else {
    res.send(`Please enter a valid Status Code to go to the Status Code page`);
  }
});
app.get("/uuid", (req, res) => {
  const generateUuid = uuidv4();
  res.send(JSON.stringify({ uuid: generateUuid }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
