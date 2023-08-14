//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var emitter = new EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
  console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
  console.log('listener2', arg1, arg2); 
}); 
setTimeout(function() { 
  emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
}, 1000); 
