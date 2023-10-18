/**
 * 静态网页模板
 */
var express = require('express');

var app = express();

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
});

app.get('/article', (req, res) => {
    res.sendFile(__dirname + '/html/article.html');
});

app.listen(3002, () => {
    console.log("http://localhost:3002")
});
