// 静态网页模板
var express = require('express');

var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

console.log("1")
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html');
});
console.log("2")
app.get('/article', (req, res) => {
    res.sendFile(__dirname + '/html/article.html');
});

app.listen(3000);
