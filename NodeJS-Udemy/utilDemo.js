//usage of native core modules

//'util' is from lib folder

var util=require('util');
var name="Bala";
var str=util.format("Hello %s",name);
util.log(str);