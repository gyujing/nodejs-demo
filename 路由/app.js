
const express = require('express')
const path = require('path')
// import { createProxyMiddleware } from 'http-proxy-middleware';
const history = require('connect-history-api-fallback')
const compression = require('compression')

const app = express()
const router = express.Router()

app.use(compression()) // 开启GZIP
app.use(router)
app.use(express.static(path.join(__dirname, 'dist')))
app.use(
  '/rj_bot',
  history({
    verbose: true,
    index: '/rj_bot/index.html', // 指定Vue应用的index.html文件路径
  })
)
app.get('/rj_bot/*', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'dist', 'rj_bot', 'index.html'))
})

module.exports = app.listen('4325', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + 4325 + '\n')
})
