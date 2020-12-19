class Drop{
    constructor(x,y){
       var ops={
           restitution:0,
           density:1,
           friction:0.1
       }
      
       this.r = 5;
       this.body = Bodies.circle(x,y,5,ops);
       World.add(world,this.body);

    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
    
     fill("blue");
     ellipseMode(CENTER);
     ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}