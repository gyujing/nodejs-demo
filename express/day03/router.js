var express = require("express");
var path = require("path");

var app = express();

var PORT = 3001;

// Single routing
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Router Working");
  // 方式一
  req.url = "./index.html";
  next();

  //方式二 都ok
  // res.sendFile(path.join(__dirname, "index.html"));
});

// app.use(history);
app.use(router);

app.use(express.static(path.join(__dirname, "./")));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT,http://127.0.0.1:" + PORT);
});
