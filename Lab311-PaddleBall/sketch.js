

//  eettlin
//  306
var paddle, mainBall;
var balls  = [];
var gameState = 0
// Setup runs once at the start of your program


function setup() {
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//  back ground color
  paddle = new Paddle(width/2, height - 100, 100, 10);
  mainBall = new Ball(width/2, 20, random(-3, 3), random(-3, 3), -1);
  loadBalls(33);
}

//  Draw runs 30 times each second
function draw() {
  // put drawing code here
    background(20,20,20, 20);//  back ground color
    if(gameState === 0){
      paddle.run();
      mainBall.run();
      for(var i =0; i < balls.length; i++){
        balls[i].run();
      }
    }else if (gameState === 1) {
      balls.splice(0, balls.length);//removes all balls from the array, so there are none carried over into the next game
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("YOU LOSE", 400, 400);//writes a red YOU LOSE on the screen
    }
}

function loadBalls(numBalls){
  for(var i =0; i < numBalls; i++){
    balls[i] = new Ball(random(width),50, random(-3.0, 3.0), random(-3.0, 3.0), i);
  }

}
