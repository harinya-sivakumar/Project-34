//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var backgroundImg;
var ground;
var fly;
var superHero;
var monster;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16; 
var box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;

 


function preload() {
// preload the images here
backgroundImg = loadImage("Images/GamingBackground.png")

}

function setup() {
  createCanvas(1400, 700);
  myuniverse = Engine.create();
  myworld = myuniverse.world ; 

  // create sprites here

  //boxes

    box1 = new Box(600, 100, 50, 50);   
    box2 = new Box(600, 100, 50, 50);
    box3 = new Box(600, 100, 50, 50);
    box4 = new Box(600, 100, 50, 50);
    box5 = new Box(600, 100, 50, 50);
    box6 = new Box(600, 100, 50, 50);
    box7 = new Box(600, 100, 50, 50);
    box8 = new Box(670, 100, 50, 50);
    box9 = new Box(670, 100, 50, 50);
    box10 = new Box(670, 100, 50, 50);
    box11 = new Box(670, 100, 50, 50);
    box12 = new Box(670, 100, 50, 50);
    box13 = new Box(670, 100, 50, 50);
    box14 = new Box(670, 100, 50, 50);
    box15 = new Box(740, 100, 50, 50);
    box16 = new Box(740, 100, 50, 50);
    box17 = new Box(740, 100, 50, 50);
    box18 = new Box(740, 100, 50, 50);
    box19 = new Box(740, 100, 50, 50);
    box20 = new Box(740, 100, 50, 50);
    box21 = new Box(740, 100, 50, 50);
    box22 = new Box(810, 100, 50, 50);
    box23 = new Box(810, 100, 50, 50);
    box24 = new Box(810, 100, 50, 50);
    box25 = new Box(810, 100, 50, 50);
    box26 = new Box(810, 100, 50, 50);
    box27 = new Box(810, 100, 50, 50);
    box28 = new Box(810, 100, 50, 50);
    box29 = new Box(880, 100, 50, 50);
    box30 = new Box(880, 100, 50, 50);

  //Create new objects
  
  ground = new Ground(600, 500, 1200, 20);
  
  superHero = new Superhero(400, 450);
  monster = new Monster(1000, 300, 100, 120);
  fly = new Rope(superHero.body, {x:400, y: 50})


}

function draw() {
  background(backgroundImg);
  Engine.update(myuniverse);

  //Displaying objects
  
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();

  
  
  
  ground.display();
  superHero.display();
  monster.display();
  fly.display();

  
  

}

//For dragging the mouse
function mouseDragged(){
  Matter.Body.setPosition(superHero.body, {x:mouseX, y:mouseY});
  
}
