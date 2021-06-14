
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
} 

function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
 
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  var survivalTime = 0;
  score = 0;
}


function draw() {
background(255);
  
  if (ground.x<0) {
      ground.x = ground.width/2
      }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
   if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(0);
  }
  
  if (frameCount%80==0){
   banana = createSprite(120,190,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   banana.lifetime = 200;
    bananaGroup.add(banana);
       
  }
  
  if(frameCount%300==0){
  obstacle = createSprite(150,325,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.11;
  obstacle.y=Math.round(random(325,325));
  obstacle.velocityX = -4;
  obstacle.lifetime = 50;
  obstacleGroup.add(obstacle);
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text ("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
 
 
  
  drawSprites();
}
