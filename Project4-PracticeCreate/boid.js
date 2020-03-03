//  Nico McCarten
// 	1/28/20
class Boid{
  constructor(x, y, dx, dy, n){
    this.loc = createVector(x, y);//location vector
    this.vel = createVector(dx, dy);//velocity vector
    this.acc = createVector(0, 0);//acceleration vector
    this.clr = color(random(0, 255), random(0, 255), random(0, 255), 10);//line color
    this.id = n;//location of boid in array
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
      this.loc.x = 0;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
      this.loc.x = width;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
      this.loc.y = 0;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
      this.loc.y = height;
    }//makes boids bouce off the edges
  }//checkEdges end
  update(){
    var distToMainball;
    distToMainball = this.loc.dist(mainBall.loc);
    if(distToMainball < 250){
      //add attraction
      this.acc = p5.Vector.sub(mainBall.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToMainball < 150){
      //add repulsion
      this.acc = p5.Vector.sub(this.loc, mainBall.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    if(distToMainball > 250){
      this.acc.x = random(-1, 1);
      this.acc.y = random(-1, 1);
    }
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
  }//update end
  render(){
    stroke(this.clr);
    var distToBoid;//creates variable distToBoid
    for(var i = 0; i < boids.length; i++){//goes through list of boids
      if(i === this.id){}else {//ignores itself
        distToBoid = this.loc.dist(boids[i].loc);//sets distToBoid to the distance to the selected boid
        if(distToBoid < 100){
          line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
        }//creates line if selected boid is within 200 pixels
      }
    }
  }//render end
}
