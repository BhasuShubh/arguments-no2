var fixedRect, movingRect, newRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  newRect = createSprite(500, 300, 50, 50);
  newRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,newRect)){
    movingRect.shapeColor = "blue";
    newRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = color(255,0,0);
    fixedRect.shapeColor = color(0,255,0);
  }
  
  else {
    movingRect.shapeColor = "green";
    newRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


