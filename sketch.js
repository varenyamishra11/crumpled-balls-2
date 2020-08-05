const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbins(1200,650);
	paperObject=new paper(200,450,45);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground
	

	// var render = Render.create({
	//   element: document.body,
	//   engine: engine,
	//   options: {
	//     width: 1200,
	//     height: 700,
	//     wireframes: false
	//   }
	// });

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  paperObject.display();
  dustbinObj.display();
 
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-35});
    
  	}
}
/*var paper1, ground1,dustbin3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
 // paper_img = loadImage("paper.png")
}

function setup() {
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650, 690, width, 30);
  
  dustbin1 = new dustbins(1115, 615, 20, 150);
  dustbin3 = new dustbins(1200, 680, 150, 20);
  dustbin2 = new dustbins(1285, 615, 20, 150);
  
  paper1 = new paper(215, 200, 40);

  
//slingshot = new Launcher(this.paper1,{x:215, y:200});

  
  Engine.run(engine);

}
function draw() {
 
  background(205);
 
 // slingshot.display();
  ground1.display();
  dustbin3.display();
  paper1.display();
  
  
  /* imageMode(CENTER)
   image(paper_img,paper1.position.x,paper1.position.y,40,40)*/
  

/*}

function keyPressed() {
  if (keyCode=== UP_ARROW) {
     //   slingshot.attach(this.paper1)
  // Matter.Body.applyForce(paper1, paper1.body.position, {x: 85,y:-85});
  }

}
/*function mouseDragged(){
  Matter.Body.setPosition(paper1, {x: mouseX , y: mouseY});
}*/


/*function mouseReleased(){
  slingshot.fly();
}*/
