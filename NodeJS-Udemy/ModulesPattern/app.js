var a=1;
var b=2;
var c=a+b;
console.log(c);


require('./greet.js');

//greet();


var fn=require('./greet.js');
fn();

console.log("*****************************************************************************");
// english tamil demo

var greetings=require('./greetings');  // there is no greetings.js, thereby it will check for greetings folder->index.js


greetings.english();
greetings.tamil();