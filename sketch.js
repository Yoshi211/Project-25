const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground1, box1, box2, box3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,600,70,70);

	box1 = new ground(550,560,20,100);
	box2 = new ground(750,560,20,100);
	box3 = new dustbin(650,560,200,20);

	ground1 = new ground(400,620,800,30);

	Engine.run(engine);
	keyPressed() 
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
  paper1.display();
  box3.display();
  box1.display();
  box2.display();
  ground1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.applyForce(paper1.body,box3.body.position,{x:150,y:-500});
	 }
   }

