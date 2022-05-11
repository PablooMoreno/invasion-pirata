const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var circulo;
var floor;
function setup() {
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var circuloOP={
    restitution:1
}
circulo=Bodies.circle(200,200,10,circuloOP);
World.add(world,circulo);
var floorOP={
    isStatic:true 
}
floor=Bodies.rectangle(100,380,400,20,floorOP);
World.add(world,floor);
}

function draw() 
{
background("black")
Engine.update(engine);  
ellipse(circulo.position.x,circulo.position.y,10);
rect (floor.position.x,floor.position.y,400,20);
}

