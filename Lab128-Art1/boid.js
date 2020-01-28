class Boid{
  constructor(x, y, dx, dy, n){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(255);
    this.id = n;
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
    }
  }
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
    this.acc.x = random(-1, 1);
    this.acc.y = random(-1, 1);
  }
  render(){
    stroke(this.clr);
    var distToBoid
    for(var i = 0; i < boids.length; i++){
      if(i === this.id){}else {
        distToBoid = this.loc.dist(boids[i].loc);
        if(distToBoid < 200){
          line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
        }
      }
    }
  }
}
