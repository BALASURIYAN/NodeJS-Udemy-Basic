console.log("This is  my first module, which is reusable")

//let us consider a function
function greet(){
    console.log("This is to check a function");
}
greet();

module.exports=greet;// to make the module greet.js available outside the module