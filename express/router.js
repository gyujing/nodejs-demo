var express = require('express'); 
var history = require('connect-history-api-fallback');
var app = express(); 
var PORT = 3001; 
  
// Single routing 
var router = express.Router(); 
    
router.get('/', function (req, res, next) { 
    console.log("Router Working"); 
    // req.url = './index.html';
    // next();
    res.end(); 
}) 

var router1 = express.Router(); 
var router2 = express.Router(); 
var router3 = express.Router(); 
  

router1.get('/user', function (req, res, next) { 
  console.log("User Router Working"); 
  res.end(); 
}); 
 
router2.get('/admin', function (req, res, next) { 
  console.log("Admin Router Working"); 
  res.end(); 
}); 

router3.get('/student', function (req, res, next) { 
  console.log("Student Router Working"); 
  res.end(); 
}); 

// app.use(history); 
app.use(router); 

app.use(router1); 
app.use(router2); 
app.use(router3); 
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT,http://127.0.0.1:"+PORT); 
});
