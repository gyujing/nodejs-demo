const express = require('express')
const server = express()

// 1、导入路由模块
const router = require('./routes/index')
// 2、注册路由模块
server.use(router)

// 3、给路由模块添加访问前缀
// server.use('/api',router)

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
