//  Nico McCarten
// 	11/25/19
class Food{
  constructor(x, y, i){
    this.loc = createVector(x, y);//location of food
    this.clr = color(255, 0, 0);//color of food
    this.id = i
  }
  run(){
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);//colors food
    rect(this.loc.x*w, this.loc.y*w, w, w);//renders food
  }//render end
  update(){
    while(this.overlapping() === true){
      this.loc.x = Math.floor(random(width/w - 1));
      this.loc.y = Math.floor(random(width/w - 1));
    }//moves food to a random location as long as inSnake is true, prevents food from appearing in snake
  }//update end
  overlapping(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      return true
    }//returns true if the food is on the snake's head
    for(var i = 0; i < snake.body.length; i++){//goes through entire body array to check for collisions.
      if(this.loc.x === snake.body[i].x && this.loc.y === snake.body[i].y){
        return true
      }//returns true if the food is on any of the body segments of the snake
    }
    for(var i = 0; i < blockers.length; i++){//goes through entire body array to check for collisions.
      if(this.loc.x === blockers[i].loc.x && this.loc.y === blockers[i].loc.y){
        return true
      }//returns true if a food is on a blocker
    }
    for(var i = 0; i < food.length; i++){//goes through entire body array to check for collisions.
      if(i === this.id){}else {
        if(this.loc.x === food[i].loc.x && this.loc.y === food[i].loc.y){
          return true
        }
      }//returns true if a food is on another food
    }
  }//overlapping end
}//Food end
