const express = require('express');
const router = require("./router")

const app = express();

// 配置解析表单请求体  application/json
// 加了这配置，req.body就可以拿到参数
app.use(express.json());

// 配置解析表单请求体  application/x-www-form-urlencoded
// 加了这配置，req.body就可以拿到参数
app.use(express.urlencoded())

app.use(router);

// 通常在所有路由之后配置
// 路由从上方下匹配不到，进入这里，所有路由都能进入
app.use((req,res,next)=>{
    res.status(404).send("404 Not Found")
})

// 这个配置错误的
app.use((err, req, res, next) => {
    console.log("错误", err)
    res.status(500).json({
        error: err.message
    })
})

app.listen(3001, () => {
    console.log("http://localhost:3001")
});
