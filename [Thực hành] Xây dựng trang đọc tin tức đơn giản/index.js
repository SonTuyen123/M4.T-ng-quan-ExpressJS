const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

const array = [
  {
    title: "Kịch bản sốc Man City - Liverpool",
    content:
      "Man City và Liverpool có thể phải phân định ngôi vương bằng trận play-off.",
  },
  {
    title: "Mbappe bất ngờ xuất hiện ở Madrid",
    content:
      "Kylian Mbappe vừa có động thái khiến truyền thông phải bất ngờ khi xuất hiện ở thủ đô Madrid của Tây Ban Nha.",
  },
  {
    title: "Haaland sắp chính thức về Man City",
    content:
      "Tiền đạo Erling Haaland vừa chính thức hoàn tất kiểm tra y tế bắt buộc tại Bỉ để chuẩn bị ký hợp đồng gia nhập Manchester City.",
  },
];
app.get("/", (req, res) => {
  res.render("home", { data: array });
});
app.listen(port, () => {
  console.log("http://localhost:%d", port);
});
