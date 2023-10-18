/**
 * 根路径 路由基本使用 - 响应POST请求
 */
var express = require('express');

var app = express();

// 配置解析表单请求体  application/json
// 加了这配置，req.bodu就可以拿到参数
app.use(express.json());

// 配置解析表单请求体  application/x-www-form-urlencoded
app.use(express.urlencoded())

app.post('/add', function (req, res) {

    console.log(req.body) 
    const todo = req.body;
    if(!todo.title){
        return res.status(422).json({
            err:"title is required"
        })
    }
});


app.listen(3001, () => {
    console.log("http://localhost:3001")
});
