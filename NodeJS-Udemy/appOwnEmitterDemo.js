var Emitter=require('./OwnEmitter');  //Emitter cariable stores the function constructor

var emtr=new Emitter();

emtr.on('greet',function(){console.log("someone says hello");});

emtr.on('greet',function(){console.log("Good Morning");});

console.log('Good night');

emtr.emit('greet');


