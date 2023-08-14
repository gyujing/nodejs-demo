var express = require("express");
var history = require("connect-history-api-fallback");
var path = require("path");

var app = express();

var PORT = 3001;

// Single routing
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Router Working");
  //   req.url = "./index.html";
  //     next();

  res.sendFile(path.join(__dirname, "index.html"));
});

// app.use(history);
app.use(router);

app.use(express.static(path.join(__dirname, "./")));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT,http://127.0.0.1:" + PORT);
});
