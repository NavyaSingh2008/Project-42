class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    this.x = x;
    this.y = y;
        this.body = Matter.Bodies.circle(this.x,this.y,50,options)
        this.image = loadImage('Walking Frame/walking_1.png')
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,100,525,400,400)
    }
}