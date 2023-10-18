var express = require('express');
var path = require('path');

var app = express();

var FILES_DIR = path.join(__dirname, 'files')

app.get('/', function (req, res) {
  // res.download("./files/amazing.txt"); //都 Ok
  res.download("amazing.txt", { root: FILES_DIR });
});

app.get('/list', function (req, res) {
  res.send('<ul>' +
    '<li>Download <a href="/files/notes/groceries.txt">notes/groceries.txt</a>.</li>' +
    '<li>Download <a href="/files/amazing.txt">amazing.txt</a>.</li>' +
    '<li>Download <a href="/files/missing.txt">missing.txt</a>.</li>' +
    '<li>Download <a href="/files/CCTV大赛上海分赛区.txt">CCTV大赛上海分赛区.txt</a>.</li>' +
    '</ul>')
});


// 参数：file
app.get('/files/:file', function (req, res, next) {
  console.log("req.url",req.url);
  console.log("req.params:", req.params)//{ '0': 'amazing.txt', file: 'amazing.txt' }
  res.download(req.params.file, { root: FILES_DIR }, function (err) {
    // err 为 undefined，下载成功
    if (!err) return;
    // next调转到下一个路由或中间件
    if (err.status !== 404) return next(err);
    // 下载失败，文件找不到
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});


app.listen(3000, () => {
  console.log("http://localhost:3000/")
});
