
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var ball;	
}

function setup() {
	createCanvas(800, 700);
	groundObj.display();
ball_options={
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObj=new ground(width/2,670,width,20);
   leftside=new ground(1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



