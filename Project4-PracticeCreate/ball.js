class Ball{
  constructor(x,y,dx,dy,o){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0)
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
    this.orbiters = [];
    for(var i = 0; i < o; i++){
      this.orbiters[i] = new Orbiter(i, o);
    }
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
  }//run end
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
  }//checkEdges end
  update(){
    this.loc.add(this.vel);
    for(var i = 0; i < this.orbiters.length; i++){
      this.orbiters[i].run();
    }
  }
}
