
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boyImg,boyObj ;
var chain1,chain2,chain3,chain4,chain5;
var stone;
var mango1,mango2,mango3,mango4;

function preload()
{
 boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 400);

	boyObj = createSprite(200,320,10,10);
	boyObj.addImage(boyImg);
	boyObj.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(850,250,200,300);
	ground = new Ground(500,400,100,50);
	stone = new Stone(140,390,10,10);
	mango1 = new Mango(800,100,50);
	mango2 = new Mango(860,100,50);
	mango3 = new Mango(880,150,50);
	mango4 = new Mango (800,180,50);









	chain1 = new Chain(stone.body,{x:140,y:270});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  chain1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  collition(stone,mango1);
  collition(stone,mango2);
  collition(stone,mango3);
  collition(stone,mango4);


  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	chain1.fly();
   } 
function collition(lstone,lmango){
	mpos = lmango.body.position;
	spos = lstone.body.position;

	var distance = dist(spos.x,spos.y,mpos.x,mpos.y)
	if(distance<=mpos.r+spos.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}
function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:140,y:270});
	chain1.attach(stone1.body);
}
}



