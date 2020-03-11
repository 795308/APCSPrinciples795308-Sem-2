  class Paddle{//****************************************  start Paddle
    constructor(x, y, w, h){
      this.loc = createVector(x, y);
      this.w = w;
      this.h = h;
      this.clr = color(190, 190, 255);
    }

    run(){
      this.update();
      this.render();
    }

    update(){
      this.loc.x = lerp( this.loc.x, mouseX,  .05)
    }

    render(){
      rectMode(CENTER);
      fill(this.clr);
      rect(this.loc.x, this.loc.y, this.w, this.h);
    }
  }//  *************************************************  end Paddle class
