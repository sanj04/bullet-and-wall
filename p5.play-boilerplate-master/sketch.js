
var wall,bullet;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2);
  

  bullet=createSprite(50,200,40,10);
  bullet.shapeColor=(255,255,255);
  speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)
  
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;

 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    if(deformation<10){
      bullet.shapeColor= color(0,255,0);
    }
    
    
    if(deformation>10){
      bullet.shapeColor= color(255,0,0);
    }
  }
 
  drawSprites();
} 

