var express = require("express");

// 1. 创建路由实例
// 路由实例相当于一个 mini Express实例
const router = express.Router();

// 2. 配置路由
router.get('/foo', function (req, res) {
  res.send('get world');
});

router.post('/foo', function (req, res) {
  res.send('post page');
});

// 3. 导出路由实例
module.exports = router

// 4. 将路由集成到 Express实例中[挂载]
