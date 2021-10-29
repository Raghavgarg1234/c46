var bgImg,bg;
var bird,birdImg

function preload () {
  bgImg = loadImage("BackGround.jpg");
  birdImg = loadImage("Bird.png");
}

function setup(){
  createCanvas(500,500);
  bg=createSprite(250,250,500,500);
  bg.velocityX = -2 
  bg.addImage(bgImg);
  bird = createSprite(50,200,10,10);
  bird.addImage(birdImg)
  bird.scale = 0.2;
}

function draw() {
  background (bgImg);
  if (bg.x<0) {
    bg.x = bg.width/2
  }

  if (keyDown("space")){

   bird.velocityY = -12

  }
  bird.velocityY+=0.8;

  drawSprites ();
}