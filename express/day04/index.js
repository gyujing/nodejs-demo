/**
 * 根路径 路由基本使用 - 响应GET、POST、PUT、DELETE请求
 */
var express = require('express');

var app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date())
  next();
})

app.get('/', function (req, res) {
  // console.log(req.method, req.url, new Date())
  res.send("Hello world")
});

app.post('/', function (req, res) {
  // console.log(req.method, req.url, new Date())
  res.send("post /")
});

app.put('/', function (req, res) {
  // console.log(req.method, req.url, new Date())
  res.send("put /")
});

app.listen(3001, () => {
  console.log("http://localhost:3001")
});
