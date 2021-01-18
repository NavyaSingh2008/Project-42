class Drops{
    constructor(x,y){
        var options={
            restitution:0.,
            friction:0.1,
            density:0.1

        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
        

    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, 5,5);
        pop();
            
                
            
    }
update(){
    if(this.body.position.y>700){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }

}

}