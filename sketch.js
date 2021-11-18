var ship, sea;
var seaimage, shipimage;

function preload(){
  
  seaimage = loadImage('sea.png');
  shipimage = loadAnimation('ship1.png','ship2.png');
  
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addImage(seaimage);
  sea.scale = 0.3;
  sea.velocityX = -3;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation('movingship',shipimage);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
 
  sea.velocityX = -3;
  if(sea.x<0){
    sea.x=sea.width/8;
  }
  
  
  drawSprites();
}