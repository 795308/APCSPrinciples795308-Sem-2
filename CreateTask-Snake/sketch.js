//  Nico McCarten
// 	11/25/19
//  This is a comment
//  The setup function function is called once when your program begins
var img;
var gameState = 1;//controls gameState
var snake;//the snake
var food;//the food
var w = 25;//the width of the grid boxes
var buttons = [];//the array of buttons
function preload(){
  img = loadImage('apple.png');
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);

  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();//loads everything when the game starts
  frameRate(15);//speed prgram runs
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    background(5,5,5);
    snake.body.splice(0, snake.body.length);//removes snake body if any exists
    fill(255);
    textSize(100);
    textAlign(CENTER);
    text("SNAKE", 400, 300);//displays game name
    buttons[0].run();//runs start button
    buttons[1].run();//runs instructions buttons
    snake.head.x = width/w/2;//resets snake head location to center
    snake.head.y = height/w/2;
    snake.vel.x = 0;//resets snake velocity to zero
    snake.vel.y = 0;
  }else if (gameState === 2) {
    background(5,5,5);
    runObjects();//runs the snake and food
    fill(255);
    textAlign(LEFT);
    textSize(25);
    text("Score = " + snake.body.length, 10, 30);//display score;
  }else if (gameState === 3) {
    background (5,5,5,20);//makes game fade out
    textAlign(CENTER);
    fill(255,0,0);
    textSize(50)
    text("YOU LOSE", 400, 400);//stops the game on tangling
    fill(255);
    textSize(40);
    text("FINAL SCORE = " + snake.body.length, 400, 300);//displays final score
    buttons[2].run();//runs replay button
  }else if (gameState === 4) {
    background(5,5,5);
    buttons[3].run();//runs back button
    textAlign(CENTER);
    textSize(60);
    fill(255);
    text("INSTRUCTIONS", 400, 100);
    textSize(25);
    text("Have the snake eat food to grow and earn points", 400, 350);
    text("The snake is the blue square, and the food is the red square", 400, 375);
    text("If the snake leaves the screen or hits itself you lose", 400, 400);
    text("Use the w, a, s, and d keys to navigate", 400, 425);
    text("Have fun!", 400, 450);//displays instructions
  }
}

function runObjects(){
  snake.run();//runs snake
  food.run();//runs food
}//runs the snake and the food

function loadObjects(){
  for(var i = 0; i < 4; i++){
    buttons[i] = new Button(i);
  }//loads buttons into array
  snake = new Snake();//creates snake
}//loads the snake and the food

function keyPressed(){//detects when keys are pressed to control the snake
  if(keyIsDown(65) && snake.vel.x ==! 1){
    snake.vel = createVector(-1, 0);
  }else if (keyIsDown(87) && snake.vel.y ==! 1) {
    snake.vel = createVector(0, -1);
  }else if (keyIsDown(83) && snake.vel.y ==! -1) {
    snake.vel = createVector(0, 1);
  }else if (keyIsDown(68) && snake.vel.x ==! -1) {
    snake.vel = createVector(1, 0);
  }
}
