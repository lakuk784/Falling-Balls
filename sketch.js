const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var divisionh = 300;

var particle = [];
var divisions = [];
var blocker = [];

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
	world = engine.world;

  //ground
  ground = new Ground (240,690,480,20)

  for (var k = 0; k<=width;k = k+80)
      {
      divisions.push(new division(k ,height-divisionh/2 ,10 ,divisionh));
      }
  for (var j = 85; j<=width; j=j+50)
      {
         blocker.push(new pinklo (j ,75))
      }
  for (var j = 15; j<=width-10; j=j+50)
      {
         blocker.push(new pinklo (j ,150))
      }
  for (var j = 85; j<=width; j=j+50)
      {
         blocker.push(new pinklo (j ,220))
      }
  for (var j = 15; j<=width-10; j=j+50)
      {
         blocker.push(new pinklo (j ,290))
      }

  Engine.run(engine);
}

function draw() {
  background(0); 
  
  ground.display();
   
  if (frameCount % 30 === 0)
     { 
       particle.push (new particles(random(50,450),10,10))
     }

  for (var k = 0; k<divisions.length; k++)
      {
        divisions[k].display();
      }
  for (var j = 0; j<blocker.length; j++)
      {
        blocker[j].display();
      }
  for (var i = 0; i<particle.length; i++)
      {
        particle[i].display();
      }
  
     
  drawSprites();
}