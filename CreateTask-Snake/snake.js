//  Nico McCarten
// 	4/8/20
class Snake{
  constructor(){
    this.head = createVector(height/w/2, width/w/2);//location of the head
    this.vel = createVector(0, 0);//the direction the snake goes in
    this.clr = color(0,0,255);//color of the snake
    this.body = [];//body array
  }
  run(){
    this.update();//moves snake and body
    this.render();//renders snake
  }//run end
  render(){
    fill(this.clr);//makes this.clr the color of the snake
    rectMode(CORNER);
    rect(this.head.x*w, this.head.y*w, w, w);//creates a snake as if it is a single point on a 80 by 80 grid, rather than a 10 by 10 square on an 800 by 800 grid
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x*w, this.body[i].y*w, w, w);
    }//renders the body segments
  }//render end
  update(){
    if(this.body.length >= 1){
      for(var i = this.body.length-1; i >= 0; i--){//updates body array in reverse to prevent stacking
        if(i < 1){
          this.body[0].x = this.head.x;//moves first segment in body onto head
          this.body[0].y = this.head.y;
        }else if (i >= 1) {
          this.body[i].x = this.body[i-1].x;//moves each segment in the body except the first into the next
          this.body[i].y = this.body[i-1].y;
        }
      }
    }
    this.head.add(this.vel);//moves the head
    if(this.tangle() === true){
      gameState = 3;
    }//ends game when tangle is true
    for(var i = 0; i < food.length; i++){
      if(this.head.x === food[i].loc.x && this.head.y === food[i].loc.y){
        this.createSegment();//create new body segment when snake gets to food
        if(hard === true){
          moveBlockers();
        }
      }
    }
  }
  tangle(){
    if(this.head.x >= width/w){
      return true
    }else if (this.head.x < 0) {
      return true
    }else if (this.head.y >= height/w) {
      return true
    }else if (this.head.y < 0) {
      return true
    }//returns true if snake leaves the screen
    for(var i = 0; i < this.body.length; i++){//goes through entire body array to check for collisions.
      if(this.head.x === this.body[i].x && this.head.y === this.body[i].y){
        return true
      }//returns true if snake hits hits its body
    }
    for(var i = 0; i < blockers.length; i++){
      if(this.head.x === blockers[i].loc.x && this.head.y === blockers[i].loc.y){
        return true
      }//returns true if snake hits hits a blocker
    }
  }//tangle end
  createSegment(){
    this.body.push(createVector(-1, -1));//loads new offscreen vector into array to be updated into proper position
  }//createSegment end
}//Snake end
