var movingrect,fixedrect;
var object1,object2;




function setup() {
  createCanvas(400,400);
  movingrect = createSprite(100, 200, 50, 50);
  movingrect.shapeColor="red";
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
  object1=createSprite(300,20,50,50);
  object1.shapeColor="pink";
  object2=createSprite(300,350,50,50);
  object2.shapeColor="orange";
  //object1.velocityX=2;
  //object2.velocityX=-2;
  object1.velocityY=2;
  object2.velocityY=-2;
}

function draw() {
  background("blue"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
}
else{
  movingrect.shapeColor="red";
  fixedrect.shapeColor="green";
}

bounceOff(object1,object2)
  drawSprites();
}

function isTouching(movingrect,fixedrect){
  if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2){
   return true;
  }
  else{
    return false;
  }
}
function bounceOff(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2 && 
  object2.x-object1.x<object1.width/2+object2.width/2)
{
object1.velocityX=object1.velocityX * (-1);
object2.velocityX=object2.velocityX * (-1);

}
if(object1.y-object2.y<object1.height/2+object2.height/2 && 
  object2.y-object1.y<object1.height/2+object2.height/2)
{
object1.velocityY=object1.velocityY * (-1);
object2.velocityY=object2.velocityY * (-1);

}
}
