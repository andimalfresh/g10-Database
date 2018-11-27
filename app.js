// Hello world !
const express = require("express");
// let data = require("./data.json");
const app = express();
const port = 6661;

app.listen(port);
() => {
  console.log(`listening on ${port}`);
};

app.get("/", (req, res) => {
  res.send("THE ROUTE WORKED!");
});
