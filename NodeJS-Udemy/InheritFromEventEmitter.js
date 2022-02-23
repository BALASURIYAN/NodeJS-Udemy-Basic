//Node Js provides us a method called inherits, which has 2 constrs as parameters
//ctor-where we built objecs with properties
//superctor-where we need to add properties


var Emitter=require('events');
var util=require('util');

function Greetr()
{
    this.greeting="Hello";
}

util.inherits(Greetr,Emitter);   //Greetr inherits from Emitter

Greetr.prototype.greet=function()
{
    console.log(this.greeting);
    this.emit('greet');
}

var greeting1=new Greetr();

greeting1.on('greet',function(){console.log('Someone said hello');});

greeting1.greet();

