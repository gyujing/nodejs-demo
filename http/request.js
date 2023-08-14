// 1.导入 http 模块
const http = require("http");
// 2.创建 web 服务器实例
const server = http.createServer();
// 3.为服务器实例绑定 request 事件
server.on("request", (req, res) => {
  // 只要有客户端来请求服务器，就会触发 request 事件，从而调用这个事件处理函数
  // const str = `Your request url is ${req.url}, and the request method is ${req.method}`;
  // 向客户端发送指定内容，并结束这次请求的处理过程
  const str = `您请求的 url 是 ${req.url}, 请求的 method 类型是 ${req.method}`;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // res.write(str);
  res.end(str);
});
// 4.启动服务器
server.listen(8080, () => {
  console.log("http server running at http://127.0.0.1:8080");
});
