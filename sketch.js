const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "onSling"
var divisions =[];

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");

    spacesu= loadImage("sprites/spacesu.png")
    spacesl= loadImage("sprites/spacesl.png")
    spacesd= loadImage("sprites/spacesd.png")
}

function setup(){
    var canvas = createCanvas(1365,653);
    engine = Engine.create();
    world = engine.world;

    //wall1
      for (var k = 683; k <=2000; k = k + 2000) {
        divisions.push(new Divisions(k, 80, 1100, 10));
      }
    //wall2
      for (var k = 138; k <=2400; k = k + 2400) {
        divisions.push(new Divisions(k, 369, 10, 355));
      }
    //wall3
      for (var k = 683; k <=3200; k = k + 3200) {
        divisions.push(new Divisions(k, 550, 1100, 10));
       }
    //wall4
      for (var k = 1228; k <=4000; k = k + 4000) {
        divisions.push(new Divisions(k, 445, 10, 200));
      }
    //wall5
      for (var k = 138; k <=4800; k = k + 4800) {
        divisions.push(new Divisions(k, 110, 10,50));
      }
    //wall6
      for (var k = 1228; k <=5600; k = k + 5600) {
        divisions.push(new Divisions(k, 185, 10, 200));
      }
    //obs1
      for (var k = 1000; k <=6400; k = k + 6400) {
        divisions.push(new Divisions(k, 455, 10, 180));
      }
    //obs2
      for (var k = 600; k <=7200; k = k + 7200) {
        divisions.push(new Divisions(k, 455, 10, 180));
      }
    //obs3
      for (var k = 800; k <=9000; k = k + 9000) {
        divisions.push(new Divisions(k, 390 ,10, 180));
      }
   //obs4
      for (var k = 800; k <=9000; k = k + 9000) {
        divisions.push(new Divisions(k, 300 ,500, 10));
      }
          //obs5
          for (var k = 350; k <=6400; k = k + 6400) {
            divisions.push(new Divisions(k, 220, 280, 10));
          }
        //obs6
          for (var k = 490; k <=7200; k = k + 7200) {
            divisions.push(new Divisions(k, 220, 10, 270));
          }
        //obs7
          for (var k = 1100; k <=9000; k = k + 9000) {
            divisions.push(new Divisions(k, 160 ,10, 150));
          }
       //obs8
          for (var k = 250; k <=9000; k = k + 9000) {
            divisions.push(new Divisions(k, 350 ,10, 250));
          }
          //obs9
          for (var k = 330; k <=7200; k = k + 7200) {
            divisions.push(new Divisions(k, 350, 150, 10));
          }
               //obs10
               for (var k = 800; k <=9000; k = k + 9000) {
                divisions.push(new Divisions(k, 220 ,10, 150));
              }
           //obs11
              for (var k = 923; k <=9000; k = k + 9000) {
                divisions.push(new Divisions(k, 200 ,235, 10));
              }
                 //obs12
                 for (var k = 1080; k <=9000; k = k + 9000) {
                  divisions.push(new Divisions(k, 450 ,150, 10));
                }
             //obs11
                for (var k = 550; k <=9000; k = k + 9000) {
                  divisions.push(new Divisions(k, 450 ,235, 10));
                }

              //obs12
              for (var k = 600; k <=9000; k = k + 9000) {
                divisions.push(new Divisions(k, 150 ,10, 130));
              }

              spacec = new Spacec (125,160);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
      }
      spacec.display();
}

// function mouseDragged(){
//     if(gameState!=="launched"){
//         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//     }
//    }


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }

function keyPressed(){
 
    if(keyCode === 37){
   
       spacec.x=spacec.x+2
   }

   if(keyCode === 38){
    
       spacec.y=spacec.y-2
   }

   if(keyCode === 39){
     
       spacec.x=spacec.x-2
   }

   if(keyCode === 40){
     
       spacec.y=spacec.y+2
   }
 
}