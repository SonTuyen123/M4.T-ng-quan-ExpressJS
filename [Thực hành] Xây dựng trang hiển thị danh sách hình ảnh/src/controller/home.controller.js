const express = require("express");
const app = express();
class HomeController {
  showHome() {
    app.set("view engine", "ejs");

    app.set("views", "./views");

    app.use(express.static("./public"));

    app.get("/", (req, res) => {
      res.render("home");
    });
  }
}
module.exports = HomeController;
