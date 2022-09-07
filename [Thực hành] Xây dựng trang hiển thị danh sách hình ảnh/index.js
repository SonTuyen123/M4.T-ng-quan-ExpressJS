const express = require("express");
const app = express();
const homeController = require("./src/controller/home.controller");
const port = 3000;

app.set("view engine", "ejs");

app.set("views", "./src/views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("http://localhost:%d", port);
});
