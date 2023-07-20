const path = require('path')
// 1、导入express模块
const express = require('express')
// 2、创建路由对象
const router = express.Router()
// 3、挂载具体的路由
router.get('/user/list', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'rj_bot', 'index.html'))
})
router.post('/user/add', (req, res) => {
  res.send('Add new user')
})

// 4、向外导出路由
module.exports = router
