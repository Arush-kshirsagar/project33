const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var balls=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
var score=0;
var count=0;
var gameState="start";
var ball;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground(width/2,height,width,20);
  for(var a=0;a<=width;a=a+80){
    divisions.push(new Divisions(a,height-divisionHeight/2,10,divisionHeight));
  }
  for(var b=75;b<=width;b=b+50){
    plinkos.push(new Plinko(b,75))
  }
  for(var b=50;b<=width-10;b=b+50){
    plinkos.push(new Plinko(b,175));
  }
  for(var b=75;b<=width;b=b+50){
    plinkos.push(new Plinko(b,275))
  }
  for(var b=50;b<=width-10;b=b+50){
    plinkos.push(new Plinko(b,375))
  }




  
  }

function draw() {
  background(0);  
  textSize(20);
  text("Score:"+score,20,40);
  textSize(35)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("300",320,550)
  text("300",400,550)
  text("300",480,550)
  text("200",560,550)
  text("200",640,550)
  text("200",720,550)

  Engine.update(engine);
  ground.display();
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(gameState=="end"){
    textSize(100);
    text("Game Over",150,250)
  }
  
  if(ball!=null)
  {
    ball.display();

    if(ball.body.position.y>760)
    {
      if(ball.body.position.x<300)
      {
        score=score+500;
        ball=null;
        if(count>=5)
        gameState="end"
          
        
    }
    else if(ball.body.position.x<600 && ball.body.position.x>301){
      score+=200
      ball=null;
      if(count>=5)
        gameState="end"

    }
    else if(ball.body.position.x<900 && ball.body.position.x>601){
      score+=300
      ball=null;
      if(count>=5)
        gameState="end"

    }
    

  } 
  }
  for(var a=0;a<divisions.length;a++){
    divisions[a].display();
  }
  
 
}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    ball=new Ball(mouseX,10,10,10);
  }
}