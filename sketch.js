var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor ="yellow";
 movingRect = createSprite(200,400,50,80)
 movingRect.shapeColor ="purple";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <fixedRect.width/2 + movingRect.width/2
    &&  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    fixedRect.shapeColor ="yellow";
    movingRect.shapeColor ="purple";
  }
  drawSprites();
}