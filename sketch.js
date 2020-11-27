const World = Matter.World;
const Bodies = Matter.Bodies;
var raindrop;

var world;




function setup() {
  createCanvas(450,800);
  


 

  

}

function draw() {
  background("black");  
  var rand = random(1,50);

  
if(frameCount%10 === 0){
  for (let i = 10; i < 440; i = i + rand) {
   var raindrop = createSprite(i,random(10,400),random(0.0000000001,5),random(0.00000000000000001,69))
   raindrop.shapeColor = rgb(0,150,200)
   raindrop.velocityY = 4
   raindrop.lifetime = 35
  }
 
 }
  drawSprites();
}