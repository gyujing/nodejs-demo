// 动态网页模板
var express = require('express');
var app = express();
var path = require("path");

// 加载hbs模块
var hbs = require('hbs');

// 设定views变量，意为视图存放的目录
app.set('views',path.join(__dirname, 'html'));

// 指定模板文件的后缀名为html
app.set('view engine', 'html');

// 运行hbs模块
app.engine('html', hbs.__express);

app.get('/', function (req, res){
	res.render('index');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/article', function(req, res) {
	res.render('article');
});

app.listen(3000);
