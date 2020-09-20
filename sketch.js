const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world, block,block,block,block,block,block,block,block,block,block,block,block,block,block,block,block,ground,ground1,polygon,polygon_img,slingShot


function preload(){
  polygon_img = loadImage("polygon.png")

}




function setup() {
   var canvas = createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(385,390,850,20);
  ground1 = new Ground(350,350,185,10)

  // first part1
  block1 = new Box(280,325,20,35);
  block2 = new Box(300,325,20,35);
  block03 = new Box(320,325,20,35);
  block3 = new Box(340,325,20,35);
  block4 = new Box(360,325,20,35);
  block5 = new Box(380,325,20,35);
  block6 = new Box(400,325,20,35);
  block7 = new Box(420,325,20,35);


  //second part1
  block8 = new Box2(300,280,20,35);
  block9 = new Box2(320,280,20,35);
  block10= new Box2(340,280,20,35);
  block11 = new Box2(360,280,20,35);
  block12 = new Box2(380,280,20,35);
  block13 = new Box2(400,280,20,35);
  
  //third part 1
  block14 = new Box3(330,235,20,35);
  block15= new Box3(350,235,20,35);
  block16 = new Box3(370,235,20,35);
  
 
  //topmost part 1
  block17 = new Box4(350,190,20,35);
 
  ground10 = new Ground(590,150,130,10)

 
  //first part 2
  block100 = new Box22(550,100,20,35);
  block20 = new Box22(570,100,20,35);
  block003 = new Box22(590,100,20,35);
  block30 = new Box22(610,100,20,35);
  block40 = new Box22(630,100,20,35);
  


  //second part 2
  block50 = new Box23(570,50,20,35);
  block60 = new Box23(590,50,20,35);
  block70 = new Box23(610,50,20,35);
 
  //topmost part 2
  block80 = new Box24(590,20,20,35);
 

  var polygon_options = {

    density:1

  }
  polygon = Bodies.circle(50,200,20,polygon_options);
  fill("red")
  World.add(world,this.polygon);

  slingShot = new SlingShot(this.polygon,{x:150,y:250})
 
  

  
}

function draw() {
  background("cyan");  
  Engine.update(engine);
  rectMode(CENTER);
  ground.display( stroke("white"));
  ground1.display();
  ground10.display();
  block1.display();
  block2.display();
  block03.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
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

  block100.display();
 block20.display();
   block003.display();
  block30.display();
 block40.display();
   block50.display();
   block60.display();
  block70.display();
  block80.display();
 
  slingShot.display();
 
  drawSprites();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  strokeWeight(1)
  stroke("black")
  textSize(24)
  fill("black")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",20,200);

  
}
function mouseDragged(){

  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingShot.fly();


}