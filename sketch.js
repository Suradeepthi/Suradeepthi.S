var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg=loadImage("sea.png");
  shipImg=loadImage("ship-1.png");


}
function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale=0.3;


  ship=crateSprite(130,200,30,30);
  ship.addImage(shipimage);
  ship.scale=0.25;


  
}

function draw() {
  background("blue");
 
}