/*
1. CREATE A PHYSICS ENGINE--done
2. ADD THE PHYSICS ENGINE TO THE PHYSICS WORLD--done
3. UPDATE THE ENGINE.. FUNCTION DRAW--done
4. CREATE A PHYSICS BODIES--done
5. ADD THAT BODY TO THE WORLD--DONE

var -- variable.. 
Helps you to store the data in the memory.
var score = 0;

const--constant
Helps you to store teh data in the memory.
const x=5;

Giving nick name to the biggest name---NAMESPACING

*/

const Engine=Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var ball;
var ground;
var myEng;
var myLand;
var box1;
var box2;


function setup(){
    createCanvas(1200,400);

    //ball = createSprite(300,300,50,50);

   myEng =  Engine.create();
   myLand =  myEng.world;

   //JSON: JAVASCRIPT OBJECT NOTATION
  /* var tam = {
       isStatic:true
    ground = Bodies.rectangle(300,590,600,10, tam);
   World.add(myLand, ground);
   console.log(ground);

   var options={
       restitution:1
   }
TAMMANA CAN YOU PLEASE CREATE GROUND OBJECT
   /*ball=Bodies.circle(300,100,40,options);
   World.add(myLand,ball);*/

   box1 = new Box(200,300,50,50);
   box2 = new Box(205, 300, 100,100);

   ground = new Ground(600,380,600,20);
}
function draw(){
    background("orange");

    Engine.update(myEng);

   // rectMode(CENTER);
    //rect(ground.position.x, ground.position.y,600,10);
    //drawSprites();

    /*ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);*/

    box1.display();
    box2.display();

    ground.display();
}