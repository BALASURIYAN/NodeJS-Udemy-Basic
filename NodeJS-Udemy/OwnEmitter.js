function Emitter()
{
    this.events={};
}

Emitter.prototype.on=function (type,listener){             //type is a property and listener is a function
    this.events[type]=this.events[type] || []; //array
    this.events[type].push(listener);
}

Emitter.prototype.emit=function(type){
    if(this.events[type])
    {
        this.events[type].forEach(function(listener)
        {
            listener();
        });
    }
}

module.exports=Emitter;