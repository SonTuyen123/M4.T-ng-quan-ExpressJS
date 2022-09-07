const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

const port = 3000;
app.set("view engine", "ejs");

app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home");
});

const arrayUser = [];

app.post("/user/showHome", upload.none(), (req, res) => {
  console.log(req.body);
  if (req.body.title && req.body.content) {
    const user = {
      title: req.body.title,

      content: req.body.content,
    };

    arrayUser.unshift(user);

    console.log(arrayUser);

    res.render("showHome", { user: arrayUser });
  } else {
    res.render("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
