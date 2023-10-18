/**
 * 根路径 路由基本使用 - 响应GET、POST、PUT、DELETE请求
 */
var express = require('express');

var app = express();

app.get('/home/:id/:name/:age',(req,res) => {
    // 响应给客户端
    // 通过req.params获取请求参数
    res.send(req.params); //{"id":"11","name":"mark","age":"12"}
})

app.get('/index/:id/:name(*)/:age(*)',(req,res) => {
    // 添加 （*），在请求参数中重复，key为数字
    console.log(req.headers)
    res.send(req.params); //{"0":"mark","1":"12","id":"11","name":"mark","age":"12"}
})

app.get('/', function (req, res) {
    // console.log(req.headers)
    console.log(req.query)
    res.send("Hello world")
});

app.post('/', function (req, res) {
    console.log(req)
    res.send("post /")
});

app.put('/', function (req, res) {
    res.send("put /")
});

app.put('/user1', function (req, res) {
    res.send("put /user")
});

app.delete('/user', function (req, res) {
    res.send("delete /user")
});

app.listen(3001, () => {
    console.log("http://localhost:3001")
});
