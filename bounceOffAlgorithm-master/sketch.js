var fixedRect, movingRect;
var ob1,ob2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(600,500,30,30);
  ob2 = createSprite(1000,500,30,30);
  ob1.shapeColor = "yellow";
  ob2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  ob1.x = World.mouseX;
  ob1.y = World.mouseY;
  
  if (isTouching(ob1,ob2)){
    ob1.shapeColor = "red";
    ob2.shapeColor  = "red";
  }else{
    ob1.shapeColor = "yellow";
    ob2.shapeColor = "blue";
  }


  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

