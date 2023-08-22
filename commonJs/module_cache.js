require('./lib.js');
require('./lib.js').message = "hello";
require('./lib.js').message
// "hello"

console.log(require.main === module)
