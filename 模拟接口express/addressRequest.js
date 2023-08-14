var express = require('express');
var app = express();
var fs = require("fs");

// 配置跨域请求中间件(服务端允许跨域请求)
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
  res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
  res.header("Access-Control-Allow-Credentials", "true"); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
  res.header("Access-control-max-age", 1000); // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数
  next();
})

// 获取行政区划信息
app.get('/cn.com.ugsg.police.address/address/common/getAllTown.do', function (req, res) {
    fs.readFile( __dirname + "/data/" + "town.json", 'utf8', function (err, data) {
        // console.log( data );
        res.end( data );
    });
})

// 获取派出所
app.get('/cn.com.ugsg.police.address/address/common/getPoliceStationByUser.do', function (req, res) {
    fs.readFile( __dirname + "/data/" + "pcs.json", 'utf8', function (err, data) {
        // console.log( data );
        res.end( data );
    });
})

// 获取所属社区
app.get('/cn.com.ugsg.police.address/address/common/getAdminAreaByPoliceStationInAddress.do', function (req, res) {
  fs.readFile( __dirname + "/data/" + "adminArea.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

// 获取所属街路巷
app.get('/cn.com.ugsg.police.address/address/common/getStreetByAdminAreaInAddress.do', function (req, res) {
  fs.readFile( __dirname + "/data/" + "street.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

// 获取所属社区
app.get('/cn.com.ugsg.police.address/address/common/getAdminAreaByPoliceStation.do', function (req, res) {
  fs.readFile( __dirname + "/data/" + "adminArea.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

// 
app.post('/cn.com.ugsg.police.address/address/plate/order/getOrderStatus.do', function (req, res) {
  fs.readFile( __dirname + "/data/" + "process.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

app.listen(8081, function () {

    console.log("应用实例，访问地址为 http://127.0.0.1:8081/cn.com.ugsg.police.address")

})
