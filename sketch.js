var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55, 90);
  weight=random(400, 1500);

  thickness=random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color(255,0,0)

  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

  bullet.velocityX=speed;


}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;



    damage=0.5*speed*speed*weight/(thickness*thickness*thickness)
    if(damage>10){

      wall.shapeColor=color(255,0,0)

      
    }

    

    if(damage<10){

      wall.shapeColor=color(0,255,0)

      
    }

  }
 







  drawSprites();
}