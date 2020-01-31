//  Nico McCarten
// 	1/28/20
class Boid{
  constructor(x, y, n){
    this.loc = createVector(x, y);//location vector
    this.vel = createVector(0, 0);//velocity vector
    this.acc = createVector(0, 0);//acceleration vector
    this.clr = color(random(0, 255), random(0, 255), random(0, 255), 25);//line color
    this.id = n;//location of boid in array
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    if(this.loc.x < 0 && this.id === 3){
      this.vel.x = 0
      this.loc.x = width;
      this.loc.y = random(height);
      this.clr = color(random(0, 255), random(0, 255), random(0, 255), 25);//randomizes line color
    }
    if(this.loc.x > width && this.id === 2){
      this.vel.x = 0
      this.loc.x = 0;
      this.loc.y = random(height);
      this.clr = color(random(0, 255), random(0, 255), random(0, 255), 25);//randomizes line color
    }
    if(this.loc.y < 0 && this.id === 1){
      this.vel.y = 0
      this.loc.y = height;
      this.loc.x = random(width);
      this.clr = color(random(0, 255), random(0, 255), random(0, 255), 25);//randomizes line color
    }
    if(this.loc.y > height && this.id === 0){
      this.vel.y = 0
      this.loc.y = 0;
      this.loc.x = random(width);
      this.clr = color(random(0, 255), random(0, 255), random(0, 255), 25);//randomizes line color
    }//makes boids bouce off the edges
  }//checkEdges end
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(5);
    if (this.id === 0) {
      this.acc.y = 0.5
    }else if (this.id === 1) {
      this.acc.y = -0.5
    }else if (this.id === 2) {
      this.acc.x = 0.5
    }else if (this.id === 3) {
      this.acc.x = -0.5
    }
  }//update end
  render(){
    stroke(this.clr);
    var distToBoid;//creates variable distToBoid
    for(var i = 0; i < boids.length; i++){//goes through list of boids
      if(this.id === 0 || this.id === 1){
        line(this.loc.x, this.loc.y, boids[2].loc.x, boids[2].loc.y);
        line(this.loc.x, this.loc.y, boids[3].loc.x, boids[3].loc.y);
      }else if (this.id === 2 || this.id === 3) {
        line(this.loc.x, this.loc.y, boids[0].loc.x, boids[0].loc.y);
        line(this.loc.x, this.loc.y, boids[1].loc.x, boids[1].loc.y);
      }
    }
  }//render end
}
