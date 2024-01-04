// Doc link https://p5play.org/learn/sprite.html

/* VARIABLES */
let score = 0;
let character,backgroundImage,characterRight,characterLeft,bucket,emptyBucket, fullBucket,rand,start,house,stage1,stage2,stage3, stage4,stage5,filled, endImage; 
let plantStages = [1,1,1,1,1,1,1,1,1,1];
let started = false;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage("assets/background.png");
  characterRight = loadImage("assets/characterRight.png");
  characterLeft = loadImage("assets/characterLeft.png");
  house = loadImage("assets/house.png");
  emptyBucket = loadImage("assets/emptyBucket.png");
  fullBucket = loadImage("assets/fullBucket.png");
  stage1 = loadImage("assets/stage1.png");
  stage2 = loadImage("assets/stage2.png");
  stage3 = loadImage("assets/stage3.png");
  stage4 = loadImage("assets/stage4.png");
  stage5 = loadImage("assets/stage5.png");
  endImage = loadImage("assets/endImage.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  //homescreen set up
  background(186, 209, 245);
    textSize(35);
  text("Save the Village", width/2-130,height/2 -120);
  image(house, width/2-60,height/2 -110,130,130);

  textSize(15);
  text("The village is in trouble! The villagers have been\nunable to farm due to a spreading sickness. Help\nthem get food by growing corn. Each mature\ncorn plant is 5 points!", 40,height/2 + 35);

//start button
start = new Sprite(width/2,height/2+135);
  
//resize images
  backgroundImage.resize(400,0);
  characterRight.resize(40,0);
  characterLeft.resize(40,0);
  house.resize(120,0);
  emptyBucket.resize(20,0);
  fullBucket.resize(20,0);
  stage1.resize(25,0);
  stage2.resize(25,0);
  stage3.resize(25,0);
  stage4.resize(25,0);
  stage5.resize(25,0);
  endImage.resize(150,0);
  
  //Create character, plants, and bucket
  plant1 = new Sprite(stage1,58,219,30,30,"s")
  plant1.visible = false;
  plant2 = new Sprite(stage1,98,219,30,30,"s")
  plant2.visible = false;
  plant3 = new Sprite(stage1,138,219,30,30,"s")
  plant3.visible = false;
  plant4 = new Sprite(stage1,178,219,30,30,"s")
  plant4.visible = false;
  plant5 = new Sprite(stage1,48,259,30,30,"s")
  plant5.visible = false;
  plant6 = new Sprite(stage1,88,259,30,30,"s")
  plant6.visible = false;
  plant7 = new Sprite(stage1,128,259,30,30,"s")
  plant7.visible = false;
  plant8 = new Sprite(stage1,164,259,30,30,"s")
  plant8.visible = false;
  plant9 = new Sprite(stage1,74,299,30,30,"s")
  plant9.visible = false;
  plant10 = new Sprite(stage1,104,299,30,30,"s")
  plant10.visible = false;

  character= new Sprite(characterRight,200,380,100,20,"k");
  character.visible = false;
  bucket= new Sprite(emptyBucket,225,390,100,20,"k");
  bucket.visible = false;

}

/* DRAW LOOP REPEATS */
function draw() {
  start.width = 100;
  start.height = 40;
  start.collider = "k";
  start.color = color(206, 218, 237);
  start.text ="Begin";
  start.textSize = 30;
  
  if(started == false && start.mouse.presses()){
    print("pressed");
    started = true;
    character.visible = true;
    bucket.visible = true;
    plant1.visible = true;
    plant2.visible = true;
    plant3.visible = true;
    plant4.visible = true;
    plant5.visible = true;
    plant6.visible = true;
    plant7.visible = true;
    plant7.visible = true;
    plant8.visible = true;
    plant9.visible = true;
    plant10.visible = true;
  }

  if (started){
    characterChecking();
    drawScreen1();
    drawcharacter();
    //if plants are watered
      if (plant1.mouse.presses() && filled == true){
        growPlants(plant1, 0);
      }
    if (plant2.mouse.presses() && filled == true){
        growPlants(plant2, 1);
      }
    if (plant3.mouse.presses() && filled == true){
        growPlants(plant3, 2);
      }
    if (plant4.mouse.presses() && filled == true){
        growPlants(plant4, 3);
      }
    if (plant5.mouse.presses() && filled == true){
        growPlants(plant5, 4);
      }
    if (plant6.mouse.presses() && filled == true){
        growPlants(plant6, 5);
      }
    if (plant7.mouse.presses() && filled == true){
        growPlants(plant7, 6);      
    }
    if (plant8.mouse.presses() && filled == true){
        growPlants(plant8, 7);
      }
    if (plant9.mouse.presses() && filled == true){
        growPlants(plant9, 8);
      }
    if (plant10.mouse.presses() && filled == true){
     growPlants(plant10, 9);      
    }
  }
//score reached
  if (score == 5*2){
    character.visible = false;
    bucket.visible = false;
    plant1.visible = false;
    plant2.visible = false;
    plant3.visible = false;
    plant4.visible = false;
    plant5.visible = false;
    plant6.visible = false;
    plant7.visible = false;
    plant8.visible = false;
    plant9.visible = false;
    plant10.visible = false;
    background(252, 233, 121);
    textSize(37);
    text("You saved the village!",width/2-180,100);
    image(endImage,width/2-150,height/2 -50,300,100);
    textSize(25);
    text("Your score: "+score,width/2-80,300);
  }
}

function characterChecking(){
//move character
  if (kb.pressing("left")){
    character.vel.x = -2;
    bucket.vel.x = -2;
    character.image = characterLeft;
  } 
  else if (kb.pressing("right")){
    character.vel.x = 2;
    bucket.vel.x = 2;
    character.image = characterRight;
  } 
  else if (kb.pressing("up")){
    character.vel.y=-2;
    bucket.vel.y=-2;
  }
  else if (kb.pressing("down")){
    character.vel.y=2;
    bucket.vel.y=2;
  } 
  else{
    character.vel.y=0;
    character.vel.x = 0;
    bucket.vel.y=0;
    bucket.vel.x = 0;
  }
  
// //stop character at edges of screen
  if (character.x < 30){
    character.x=30;
    bucket.x=55;
  }else if (character.x>370){
    character.x = 370;
    bucket.x=345;
  } else if (character.y>390){
    character.y = 390;
    bucket.y=390;
  }else if (character.y<10){
    character.y = 10;
    bucket.y=10;
  }

}

function growPlants(plant, index){
  filled=false;
    bucket.image = emptyBucket;
    rand = random(2);
    print(rand);
    if (rand >= .20){
      print(plantStages[index]);
      if(plantStages[index] == 1){
      plant.image = stage2;
      plantStages[index] = 2;
      print("done");
      } 
      else if (plantStages[index] == 2){
        plant.image = stage3;
        plantStages[index] =3;
      }
      else if (plantStages[index] == 3){
        plant.image = stage4;
        plantStages[index] =4;
      } else if (plantStages[index] == 4){
        plant.image = stage5;
        plantStages[index] =5;
        score +=5;
      }
    }
  print(plantStages[index]); 
}


function drawcharacter(){
    //if character touches the water
   if (character.x>=62 && character.x<=272 && character.y>=28 && character.y<=118 ||character.x>=136 && character.x<=234 && character.y>=10 && character.y<=160){
    print("water");
     filled = true;
    bucket.image = fullBucket;
   }

}
function drawScreen1(){
    //draw background image
  background(200,200,200);
  image(backgroundImage,0,0);
  // print("x:" +character.x);
  // print("y:"+ character.y);
  //remove homescreen elements
  start.x = -100;
  start.y= -100;
  // Draw directions to screen
  fill(0);
  textSize(12);
  text("Score: " + score,340,395);
}
