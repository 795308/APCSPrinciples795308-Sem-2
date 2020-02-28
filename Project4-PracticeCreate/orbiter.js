class Orbiter{
  constructor(id, num){
    this.loc = createVector(0, 0);//location vector
    this.vel = createVector(0, 0);//velocity vector
    this.acc = createVector(0, 0);//acceleration vector
    this.clr = color(random(0, 255), random(0, 255), random(0, 255), 10);
    this.time = TWO_PI*(id/num);//sets time so that orbiters are evenly distributed around the object
  }
  run(){
    this.render();
    this.update();
  }
  update(){
    this.loc.x = mainBall.loc.x+100*cos(this.time);
    this.loc.y = mainBall.loc.y+100*sin(this.time);
    this.time = this.time + 0.05;
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 10, 10);
    stroke(this.clr);
    var distToBoid;//creates variable distToBoid
    for(var i = 0; i < boids.length; i++){//goes through list of boids
      distToBoid = this.loc.dist(boids[i].loc);//sets distToBoid to the distance to the selected boid
      if(distToBoid < 100){
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }//creates line if selected boid is within 200 pixels
    }
  }
}
