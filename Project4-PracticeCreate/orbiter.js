class Orbiter{
  constructor(id){
    this.loc = createVector(0, 0);//location vector
    this.vel = createVector(0, 0);//velocity vector
    this.acc = createVector(0, 0);//acceleration vector
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.id = id
    for(var i = 0; i < orbiters.length; i++){
      this.time = TWO_PI*(i/orbiters.length);
    }
  }
  run(){
    this.update();
    this.render();
  }
  update(){
    this.loc.x = mainBall.loc.x+100*cos(this.time);
    this.loc.y = mainBall.loc.y+100*sin(this.time);
    this.time = this.time + 0.05;
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 10, 10);
  }
}
