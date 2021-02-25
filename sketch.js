const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,stand;
var box1,box2,box3,box5,box6,box7,box8,box9,box10;
var polygon;
var polygon_img;
var slingShot;

function preload(){
  polygon_img=loadImage("sprites/polygon.png");
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  //ground = new Ground(600,height,1200,20)
  stand=new Ground(390,260,250,10);
  strokeWeight(2);
  stroke(15);
  fill("skyblue")
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);

  box9 = new Box(390,155,30,40);
  // create polygon and add it the world. See Hints

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});


}

function draw() {
  //Engine.update(engine);
  background(255,255,255); 
  
 // ground.display(); 
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  // Adda an image for the polygon here.
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();


  
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}