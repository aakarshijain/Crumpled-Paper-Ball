const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  	
}

function setup() {
	createCanvas(1000, 600);
 

	engine = Engine.create();
	world = engine.world;

 ground = new Ground (500, 590, 1000, 20);
 ball = new Paper (30,450,100);
 d1 = new Dustbin(740,535,10,70);
 d2 = new Dustbin(850,535,10,70);
 d3 = new Box(795,510,120,1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 ground.display();
 d1.display();
 d2.display();
 d3.display();
 ball.display();

}

function keyPressed(){

 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-250});
 }

}



