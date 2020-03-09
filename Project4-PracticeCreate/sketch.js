//  Nico McCarten
// 	3/8/20
//  This is a comment
//  The setup function function is called once when your program begins
var mainBall;
var boids = [];//array for boids
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids(50, 25);


}

//  The draw function is called @ 30 fps
function draw() {
  if(mouseIsPressed){
    background(5, 5, 5);
  }
  runBoids();
}
function loadBoids(n, o){
  mainBall = new Ball(400, 400, random(2.5, -2.5), random(2.5, -2.5), o);
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}//loads boids in array
function runBoids(){
  mainBall.run();
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}//runs all boids in array
