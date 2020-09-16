
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1= new Dustbin(940,560,20,100);
	dustbin2= new Dustbin(760,560,20,100);
	dustbin3= new Dustbin(850,600,200,20);
	ground1= new Ground(600,620,1200,20);
  paper1= new Paper(100,560,10,10);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
  }
}



