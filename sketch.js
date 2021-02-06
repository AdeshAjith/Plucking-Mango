
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, slingshot;
var mango1;
var world,boy;

function preload(){
	boy = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,80,30);
	mango2 = new mango(1000,200,30);
	mango3 = new mango(1150,250,30);
	mango4 = new mango(1200,200,30);
	mango5 = new mango(1000,85,30);
	mango6 = new mango(900,220,30);
	mango7 = new mango(1100,220,30);
	mango8 = new mango(950,250,30);
	mango9 = new mango(1040,140,30);
	mango10 = new mango(1150,150,30);

	stoneObj = new stone(230,440,20)
	slingshot = new SlingShot(stoneObj.body,{x:230,y:440})	

	treeObj = new tree(1050,600);
	groundObject = new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(18)
  fill("black")
  text("Press Space To Play Again!",100,50)
  image(boy ,200,370,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  slingshot.display();

  stoneObj.display();
  groundObject.display();

  detectCollision(mango1,stoneObj)
  detectCollision(mango2,stoneObj)
  detectCollision(mango3,stoneObj)
  detectCollision(mango4,stoneObj)
  detectCollision(mango5,stoneObj)
  detectCollision(mango6,stoneObj)
  detectCollision(mango7,stoneObj)
  detectCollision(mango8,stoneObj)
  detectCollision(mango9,stoneObj)
  detectCollision(mango10,stoneObj)
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

function detectCollision(Mango,Stone){
  mangoPosition = Mango.body.position
  stonePosition = Stone.body.position

  var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
  if(distance<=Mango.r+Stone.r){
    Body.setStatic(Mango.body,false)
  }
}

function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(stoneObj.body,{x:230,y:440})
    slingshot.attach(stoneObj.body)
  }
}