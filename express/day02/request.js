/**
 * 根路径 路由基本使用 - 响应POST请求
 */
var express = require('express');

var { getDb, saveDb } = require('./db');

var app = express();

// 配置解析表单请求体  application/json
// 加了这配置，req.bodu就可以拿到参数
app.use(express.json());

// 配置解析表单请求体  application/x-www-form-urlencoded
app.use(express.urlencoded())

// 获取
app.get('/get', async function (req, res) {
    try {
        const db = await getDb();
        res.status(200).json({
            data: db.todos
        })
    } catch (error) {
        res.status(422).json({
            error: error.message
        })
    }
});

// 添加
app.post('/add', async function (req, res) {

    console.log(req.body)
    const todo = req.body;
    if (!todo.title) {
        return res.status(422).json({
            err: "title is required"
        })
    }
    const db = await getDb();
    db.todos.push(todo);
    await saveDb(db);

    return res.status(200).json({
        data: "添加成功"
    })
});


app.listen(3001, () => {
    console.log("http://localhost:3001")
});
