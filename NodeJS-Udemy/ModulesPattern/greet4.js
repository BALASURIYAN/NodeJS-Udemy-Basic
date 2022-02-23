function Greetr()
{
    this.wish="Good Morning";
    this.wishings=function (){
        console.log(this.wish);
    }
}

module.exports=Greetr;