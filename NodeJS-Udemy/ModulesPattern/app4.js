
var g1=require('./greet4');

var g=new g1();

g.wishings();
console.log(g.wish);



g.wish="Good afternoon";

//new object is created here

var h=new g1();
h.wishings();
console.log(h.wish);
