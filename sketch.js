const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkos = [];
var partacles = [];
var engine, world;

function setup() {
  createCanvas(420,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  deivider1 = new Divider(1,755,20,150);
  deivider2 = new Divider(100,755,20,150);
  deivider3 = new Divider(199,755,20,150);
  deivider4 = new Divider(298,755,20,150);
  deivider5 = new Divider(397,755,20,150);
  for (var j = 40; j <=440; j=j+50)
{
  plinkos.push(new palinko(j-20,180,10));
  plinkos.push(new palinko(j,300,10));
  plinkos.push(new palinko(j-20,400,10));
 }
 if (frameCount%30===0){
  partacles.push(new Particle(20,400,10));


 }
}

function draw() {
  background(0,0,0) 
  drawSprites();

  deivider1.display();
  deivider2.display();
  deivider3.display();
  deivider4.display();
  deivider5.display();
  ground.display();
 for(var i = 0; i <plinkos.length; i++)
  {plinkos[i].display()}
  for(var o = 0; 0 <partacles.length; o++)
  {partacles[i].display()}
}


