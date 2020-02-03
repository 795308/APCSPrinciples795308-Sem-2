//  Nico McCarten
// 	2/3/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = []//array for boids
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBoids();


}

//  The draw function is called @ 30 fps
function draw() {
  //background(5, 5, 5);
  runBoids();
}
function loadBoids(){
  boids[0] = new Boid(random(width), 0, 0);
  boids[1] = new Boid(random(width), height, 1);
  boids[2] = new Boid(0, random(height), 2);
  boids[3] = new Boid(width, random(height), 3);
}//loads boids in array
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}//runs all boids in array
