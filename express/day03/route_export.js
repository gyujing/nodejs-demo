/**
 * 将路由单独封装
 */
const express = require("express");
const router = require("./routes/index2")

const app = express();

app.use(router);

app.use(express.static(path.join(__dirname, "./")));

app.listen("3335", function (error) {
  if (err) console.log(err);
  console.log("Server listening on PORT,http://127.0.0.1:" + PORT);
})
