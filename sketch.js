var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime;
var jungle, jungleImage;

function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
 
}



function setup() {
  
  jungle=createSprite(200,200);
  jungle.addAnimation("jungle",jungleImage)
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,370,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible = false;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
}


function draw() {

  if(ground.x<0){
    
    ground.x=ground.width/2;
    
  }
  
  if (foodGroup.isTouching(monkey)){
    
    score = score + 1;
    foodGroup.destroyEach();
    
  }
  
  switch(score) {
      case 10: monkey.scale=0.11;
              break;
      case 20: monkey.scale=0.12;
              break;
      case 30: monkey.scale=0.13;
              break;
      case 40: monkey.scale=0.14;
              break;
      case 50: monkey.scale=0.15;
              break;
      case 60: monkey.scale=0.16;
              break;
      case 70: monkey.scale=0.17;
              break;
      case 80: monkey.scale=0.18;        
             break;
      case 90: monkey.scale=0.19;
              break;
      case 100: monkey.scale=0.2; 
              break;
      default: break;
    } 
  
  if(obstacleGroup.isTouching(monkey)){
    
    monkey.scale=0.1;
    score = 0;
    obstacleGroup.destroyEach();
    
  }
  
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  background(225);
  
  food();
  
  monster();

  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score-"+score,310,30);

  
}

function food(){

 if(frameCount % 80 === 0){
    
   banana = createSprite(300,200,20,20);
   banana.scale=0.1;
   banana.addImage("banana",bananaImage);
   banana.y = Math.round(random(120,200));
   banana.velocityX=-6;
   banana.lifetime=50;
   
   foodGroup.add(banana);
}

}

function monster(){
  
  if(frameCount % 300 === 0){
    
    
   obstacle = createSprite(400,325,20,20);
   obstacle.addImage("monster",obstacleImage);
   obstacle.velocityX=-6;
   obstacle.lifetime=70;   
   obstacle.scale=0.2; 
    
   obstacleGroup.add(obstacle);
  }
  
}