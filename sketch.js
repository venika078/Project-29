
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(400,500,1500,25)

	block1=new Blueblock(300,200,30,30);
	block2=new Blueblock(310,200,30,30);
	block3=new Blueblock(320,200,30,30);
	block4=new Blueblock(330,200,30,30);
	block5=new Blueblock(340,200,30,30);
	block6=new Blueblock(350,200,30,30);
  
ground2= new Ground(360,400,350,20)
block7=new Yellowblock(345,180,30,30);
block8= new Yellowblock(335,180,30,30)
block9 = new Yellowblock(325,180,30,30)
block10 = new Yellowblock(315,180,30,30)
block11 = new Yellowblock(305,180,30,30)

block12 = new Greenblock(310,160,30,30);
block13 = new Greenblock(320,160,30,30);
block14 = new Greenblock(330,160,30,30);
block15 = new Greenblock(340,160,30,30);

block16 = new Blueblock(335,140,30,30);
block17 = new Blueblock(325,140,30,30);
block18 = new Blueblock(315,140,30,30);

block19 = new Greenblock(320,120,30,30);
block20 = new Greenblock(330,120,30,30);

block21 = new Pinkblock(325,100,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  Engine.update(engine)
  ground1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
ground2.display();
block8.display();
block9.display();
block10.display();
block11.display();

block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

drawSprites();
}



