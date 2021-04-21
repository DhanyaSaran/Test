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
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        fill("white");
    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
            score++;  
            box1.score();
        box2.score();
        box3.score();
        box4.score();
        box5.score();
        box6.score();
        box7.score();
        box8.score();
        box9.score();
        box10.score();
        box11.score();
        box12.score();
        box13.score();
        box14.score();
        box15.score();
        box16.score();
        box17.score();
        box18.score();
        box19.score();
        box20.score();
        box21.score();
        box22.score();
        box23.score();
        box24.score();
        box25.score();
        box26.score();
        box27.score();
        box28.score();
        box29.score();
        box30.score();
        box31.score();
        box32.score();
        box33.score();
        box34.score();
        box35.score();
        box36.score();
        box37.score();
        box38.score();
        box39.score();              
        }
        
     

    }
}
