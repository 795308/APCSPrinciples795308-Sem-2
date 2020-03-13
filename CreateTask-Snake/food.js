//  Nico McCarten
// 	11/25/19
class Food{
  constructor(x, y){
    this.loc = createVector(x, y);//location of food
    this.clr = color(5);//color of food
  }
  run(){
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);//colors food
    rect(this.loc.x*w, this.loc.y*w, w, w);//renders food
    image(img, this.loc.x*w-w/2, this.loc.y*w-w/2, 2*w, 2*w);
  }//render end
  update(){
    while(this.inSnake() === true){
      this.loc.x = Math.floor(random(width/w - 1));
      this.loc.y = Math.floor(random(width/w - 1));
    }//moves food to a random location as long as inSnake is true, prevents food from appearing in snake
  }//update end
  inSnake(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      return true
    }//returns true if the food is on the snake's head
    for(var i = 0; i < snake.body.length; i++){//goes through entire body array to check for collisions.
      if(this.loc.x === snake.body[i].x && this.loc.y === snake.body[i].y){
        return true
      }//returns true if the food is on any of the body segments of the snake
    }
  }//inSnake end
}//Food end
