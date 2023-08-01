const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

//connect routes to their pages
let index = fs.readFileSync("index.html");

app.get("/", (req, res) => res.redirect("/index"));
app.get("/index", (req, res) => res.end(index));

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
