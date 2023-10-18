/**
 * Router 将路由请求独立出来，不全堆积在这里
 */

const express = require('express');
const router = require('./routes');

const app = express();

// 挂载路由
// app.use(router)

// 给路由限定访问前缀 http://localhost:3001/abc/foo
app.use("/abc",router)

app.listen(3001, () => {
    console.log("http://localhost:3001")
});
