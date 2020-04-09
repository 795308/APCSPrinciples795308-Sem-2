// Nico McCarten
// 4/8/20
class Blocker{
  constructor(x, y, i){
    this.loc = createVector(x, y);//location of blocker
    this.clr = color(50);//color of blocker
    this.id = i;
  }
  run(){
    this.update();
    this.render();
  }
  render(){
    fill(this.clr);//colors blocker
    rect(this.loc.x*w, this.loc.y*w, w, w);//renders blocker
  }
  update(){
    while(this.overlapping() === true){
      this.loc.x = Math.floor(random(width/w - 1));
      this.loc.y = Math.floor(random(width/w - 1));
    }
  }
  overlapping(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      return true
    }//returns true if a blocker is on the snake's head
    for(var i = 0; i < snake.body.length; i++){//goes through entire body array to check for collisions.
      if(this.loc.x === snake.body[i].x && this.loc.y === snake.body[i].y){
        return true
      }//returns true if a blocker is on any of the body segments of the snake
    }
    for(var i = 0; i < food.length; i++){//goes through entire body array to check for collisions.
      if(food[i].loc.x-1 <= this.loc.x && food[i].loc.x+1 >= this.loc.x && food[i].loc.y-1 <= this.loc.y && food[i].loc.y+1 >= this.loc.y){
        return true
      }//returns true if a blocker is on a food
    }
    for(var i = 0; i < blockers.length; i++){//goes through entire body array to check for collisions.
      if(i === this.id){}else {
        if(this.loc.x === blockers[i].loc.x && this.loc.y === blockers[i].loc.y){
          return true
        }
      }//returns true if a blocker is on another blocker
    }
  }
}
