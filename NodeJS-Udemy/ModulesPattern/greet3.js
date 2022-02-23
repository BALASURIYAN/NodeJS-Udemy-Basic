function Greetr()
{
    this.greeting="Hey Bala";
    this.greet=function(){
        console.log(this.greeting);
    }
}

module.exports=new Greetr();