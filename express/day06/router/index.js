
const express = require('express');

const { getDb, saveDb } = require('./db');

const router = express.Router();

// 获取
router.get('/get', async function (req, res, next) {
  try {
    const db = await getDb();
    res.status(200).json({
      data: db.todos
    })
  } catch (error) {
    next(error)
  }
});

// 添加
router.post('/add', async function (req, res, next) {
  try {
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
  } catch (error) {
    next(error)
  }

});

module.exports = router;
