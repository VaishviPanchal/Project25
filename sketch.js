
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;

function preload(){
	trashcanImg = loadImage("trashcan.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(50,600,40);

	console.log(paper.body.position.y)
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

 console.log(paper.body.position.y)
  image(trashcanImg,1200,650,100,150)

  groundObject.display();
  //dustbinObj.display();
  paper.display();

}

