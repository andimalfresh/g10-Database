// Hello world !
const express = require("express");
const app = express();
const port = 6661;
const queries = require("./queries");

app.get("/", (req, res) => {
  queries.getAll().then(responce => res.send(responce));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
