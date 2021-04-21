class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visiblity=255
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        fill("white");
    }
    score(){
        console.log("func")
        if(this.Visiblity<0 && this.Visiblity>-200){
            console.log("if")
            score++;  
                      
        }
    }
}
