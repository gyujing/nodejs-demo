/**
 * 应用级别中间件
 */

var express = require('express');

var app = express();

// 1、 不关心请求路径
// app.use((req, res, next) => {
//   console.log("Time", Date.now());
//   next();
// });

// 2、- 限定请求路径
// app.use('/user/:id',(req, res, next) => {
//   console.log("Request Type", req.method); // GET
//   next();
// });


// 3、- 限定请求方法+请求路径【路由中间件】
// app.get('/user/:id',(req, res, next) => {    
//   res.send('Hello World')
// });


// 4、- 多个处理函数
// app.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request URL", req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Request Type", req.method);
//     next();
//   }
// );

// 5、- 为同一个路径定义多个处理中间件
app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID", req.params.id);
    // 内部的next
    next();
  },
  (req, res, next) => {
    res.send("User Info");
    next();
  }
);

app.get("/user/:id", (req, res, next) => {
  console.log("123");
  // res.end(req.params.id);
});

// 额外说明：next("route"); 将控制权传递给下一条路由
// 跳过，不执行第二个中间件处理方法
app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID", req.params.id);
    next("route");
  },
  (req, res, next) => {
    res.send("User Info");
    next();
  }
);

// res.send不执行，res.end不报错
app.get("/user/:id", (req, res, next) => {
  console.log("123");
  res.end(req.params.id);
});


// 6、带有中间件子堆栈的数组
function logOriginalUrl(req, res, next) {
  console.log("Request URL", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Requset Type", req.method);
  next();
}
const logStuff = [logOriginalUrl, logMethod];

app.get("/user1/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});


app.listen(3001, () => {
  console.log("http://localhost:3001")
});
