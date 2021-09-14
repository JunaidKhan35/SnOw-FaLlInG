const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy;
var snow=[];

function preload(){
  bgImage = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(1280,605);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(bgImage);
  Engine.update(engine);
  
  if(frameCount%1===0){
    snow.push(new Snow(random(width-1500, width+600),10,10));

  }
  
  for (var i = 0; i<snow.length; i++){
    snow[i].display();
  }

  drawSprites();
  }