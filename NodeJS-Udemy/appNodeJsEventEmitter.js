var Emitter=require('events');  //events.js is a file in lib folder

// var Emitter contains the function constructor

var emtr=new Emitter();

emtr.on('greet',function(){console.log("Good Morning");});

emtr.on('greet',function(){console.log("Good Evening");});

console.log("Good night");

emtr.emit('greet');

