var express = require('express');
var app = express();
var fs = require("fs");

// 查
app.get('/listUsers', function (req, res) {
  // console.log(req)
  // console.log(res)
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.get('/addUser', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    let arr = JSON.parse(data);
    
    arr.push({
        "name" : "ramesh",
        "password" : "password3",
        "profession" : "clerk",
        "id": 4
      }
    )
    console.log(arr)
    fs.writeFile( __dirname + "/" + "users.json",JSON.stringify(arr), function(err) {
      if (err) {
          return console.error(err);
      }
      console.log("数据写入成功！");
      res.end( "数据写入成功！" );
    })
});
})

var server = app.listen(8081, function () {

    console.log("应用实例，访问地址为 http://127.0.0.1:8081/addUser")

})
