//name spacing
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var eng, wld;
var box1,box2;
var ground1;

function setup() {
  createCanvas(1200,800);
  eng=Engine.create();
  wld=eng.world;

  
  box1= new Box(200,300,50,50);
  box2= new Box(240,100,50,100);

  ground1= new Ground(600,400,1200,40);

  
}

function draw() {
  Engine.update(eng);
  background(0);  
  
  box1.display();
  box2.display();
  ground1.display();
  
}