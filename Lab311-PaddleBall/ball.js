//  First Constructor Function
// eettlin
// March 10, 2020

class Ball{
 //  Ball Properties  +++++++++++++++++++++++++++++++++++++++++++++
 constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.016);
    this.w = 15;
    this.id = id;
    if(this.id < 0) {this.w = 50;}
 }

 run(){
   this.checkEdges();
   this.update();
   this.render();
   this.isColliding();
   this.remove();
 }


  checkEdges(){//+++++++++++++++++++++++++++++++++++++++++++++++++++
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
  } //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  update(){//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var distToMainBall;
    if(this.id >= 0){//  if not mainBall


    }

    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
  }//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 render(){
  //  **************************************************************
   if(this.id < 0){
    fill(255,0,0);
  }else if(this.id%2 === 0){
    fill(0,255,0);
   }else{
    fill(0,0,255);
   }
   ellipse(this.loc.x, this.loc.y, this.w, this.w);
 }//***************************************************************

 isColliding(){
   if(this.id<0){
     if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2){
         return true
     }
   }else if (this.id%2 === 0) {
     if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2 && this.vel.y<0){
         return true
     }
   }else {
     if(this.loc.x > paddle.loc.x - paddle.w/2 && this.loc.x < paddle.loc.x + paddle.w/2 && this.loc.y > paddle.loc.y - paddle.h/2 && this.loc.y < paddle.loc.y + paddle.h/2 && this.vel.y>0){
         return true
     }
   }
  }//checks if the ball is colliding with the paddle

  remove(){
    for(var i = balls.length-1; i>=0; i--){
      if(balls[i].isColliding()){
        balls.splice(i, 1);
      }
    }
    if(mainBall.isColliding()){
      gameState = 1
    }
  }//removes balls that touch the paddle from the array.
}//  end Ball class
