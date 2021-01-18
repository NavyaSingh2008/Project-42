const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var drops=[];
var engine,world;
var maxDrops=100;

function setup(){
    createCanvas(480,800);
    engine=Engine.create();
    world=engine.world;
    
    ground=new Ground(240,800,480,10);
    person = new Umbrella(80,450);
   newDrops = new Drops(200,50);
   for (var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400),random(0,400)));
   } 
}

function draw(){
    background("black");
    Engine.update(engine); 
  ground.display();
  
  person.display();
  newDrops.display();
  newDrops.update();
  for(var i = 0; i <maxDrops; i++){
      drops [i].display();
      drops [i].update();
    }
}   

