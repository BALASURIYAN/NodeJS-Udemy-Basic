var buf=new Buffer('hello','utf-8');

console.log(buf);

console.log(buf.toString());

console.log(buf.toJSON());

console.log(buf[3]);
buf.write('world');
console.log(buf.toString());