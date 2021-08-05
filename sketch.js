var ship,shipimage
var sea,seaimage
function preload(){
  seaimage=loadImage("sea.png")
shipimage=loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,200,200);
  sea.addImage("sea",seaimage)
  sea.velocityX=-2
  ship=createSprite(200,250,100,100);
  ship.addAnimation("ship",shipimage)
  ship.scale=0.3
}

function draw() {

  background("blue");
  if(sea.x<0){
  sea.x=200;
  } 
  drawSprites();

  }
 
