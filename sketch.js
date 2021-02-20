var canvas;
var music;
var orangeBox1;
var greenBox1;
var purpleBox1;
var redBox1;
var jumpingBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
orangeBox1 = createSprite(695,580,200,30);
orangeBox1.shapeColor = "orange";
greenBox1 = createSprite(490,580,200,30);
greenBox1.shapeColor = "green";
purpleBox1 = createSprite(285,580,200,30);
purpleBox1.shapeColor = "purple";
redBox1 = createSprite(80,580,200,30);
redBox1.shapeColor = "red";

    //create box sprite and give velocity
    jumpingBox = createSprite(400,400,30,30);
    jumpingBox.shapeColor = "grey";
    jumpingBox.velocityY = 16;
    jumpingBox.velocityX = 16;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges=createEdgeSprites();
    jumpingBox.bounceOff(edges);

    bounceOffobjects(greenBox1, jumpingBox);

    if(purpleBox1.x - jumpingBox.x <= purpleBox1.width/2 + jumpingBox.width/2 && 
      jumpingBox.x - purpleBox1.x <= purpleBox1.width/2 + jumpingBox.width/2  &&
      purpleBox1.y - jumpingBox.y <= purpleBox1.height/2 + jumpingBox.height/2 && 
      jumpingBox.y - purpleBox1.y <= purpleBox1.height/2 + jumpingBox.height/2){
      jumpingBox.shapeColor = "purple";
      purpleBox1.shapeColor = "purple";
      }

      if(greenBox1.x - jumpingBox.x <= greenBox1.width/2 + jumpingBox.width/2 && 
        jumpingBox.x - greenBox1.x <= greenBox1.width/2 + jumpingBox.width/2  &&
      greenBox1.y - jumpingBox.y <= greenBox1.height/2 + jumpingBox.height/2 && 
      jumpingBox.y - greenBox1.y <= greenBox1.height/2 + jumpingBox.height/2){
      jumpingBox.shapeColor = "green";
      greenBox1.shapeColor = "green";
        }

      if(redBox1.x - jumpingBox.x <= redBox1.width/2 + jumpingBox.width/2 && 
       jumpingBox.x - redBox1.x <= redBox1.width/2 + jumpingBox.width/2  &&
       redBox1.y - jumpingBox.y <= redBox1.height/2 + jumpingBox.height/2 && 
       jumpingBox.y - redBox1.y <= redBox1.height/2 + jumpingBox.height/2){
       jumpingBox.shapeColor = "red";
       redBox1.shapeColor = "red";
          }
       if(orangeBox1.x - jumpingBox.x <= orangeBox1.width/2 + jumpingBox.width/2 && 
        jumpingBox.x - orangeBox1.x <= orangeBox1.width/2 + jumpingBox.width/2  &&
        orangeBox1.y - jumpingBox.y <= orangeBox1.height/2 + jumpingBox.height/2 && 
        jumpingBox.y - orangeBox1.y <= orangeBox1.height/2 + jumpingBox.height/2){
        jumpingBox.shapeColor = "orange";
        orangeBox1.shapeColor = "orange";
            }


    //add condition to check if box touching surface and make it bounce
    bounceOffobjects(greenBox1, jumpingBox);

    drawSprites();
  }


  function bounceOffobjects(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    }
  }
