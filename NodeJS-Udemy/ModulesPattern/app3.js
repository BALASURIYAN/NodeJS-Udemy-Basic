var g=require('./greet3');

g.greet();
console.log(g.greeting);
g.greeting="Hey Balasuriyan";



//same object returns
var g1=require('./greet3');
console.log(g.greeting);