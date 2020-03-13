//  Nico McCarten
// 	11/25/19
class Button{
  constructor(id){
    this.x = 0;//x location
    this.y = 0;//y location
    this.w = 120;//width of button
    this.h = 50;//height of button
    this.clr = color(255);//color of button
    this.textclr = color(0);//color of button's text
    this.id = id;//id of button, assigned by place loaded into array
    this.text = "Placeholder";//text of button
    this.gotostate = 2;//gameState the button sends you to when pressed
  }
  run(){
    this.idCheck();//checks id of bautton to assign characteristics
    this.render();//makes button visible
    this.mouseCheck();//checks if the mouse is hovering over the button, and if it is clickeds
  }
  render(){
    rectMode(CENTER);
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);//creates a rectangle of the designated color at the designated position, with the designated height and width
    textAlign(CENTER);
    textSize(32);
    fill(this.textclr);
    text(this.text, this.x, this.y + this.h/4);//creates text in the button
  }//creates button object
  idCheck(){
    if(this.id === 0){
      this.y = 500;
      this.x = 400;
      this.clr = color(0,255,0);
      this.text = "Start";
      this.gotostate = 2;
    }else if (this.id === 1) {
      this.y = 600;
      this.x = 400;
      this.clr = color(255);
      this.text = "Instructions";
      this.gotostate = 4;
      this.w = 200;
    }else if (this.id === 2) {
      this.y = 700;
      this.x = 400;
      this.clr = color(255);
      this.text = "Restart?";
      this.gotostate = 1;
    }else if (this.id === 3) {
      this.y = 700;
      this.x = 400;
      this.clr = color(255);
      this.text = "Back";
      this.gotostate = 1;
    }//defines location, text, and color of the button based on id number, as well as the gamestate they send you to
  }
  mouseCheck(){
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2){
      this.textclr = this.clr;
    }else {
      this.textclr = color(0);
    }//checks if mouse is hovering over a button to remove the text
    if(mouseX > this.x - this.w/2 && mouseX < this.x + this.w/2 && mouseY > this.y - this.h/2 && mouseY < this.y + this.h/2 && mouseIsPressed){
      gameState = this.gotostate
      if(this.id === 0){
        food = new Food(Math.floor(random(width/w - 1)), Math.floor(random(width/w - 1)));//creates food in random position
      }
    }//changes gameState when a button is pressed to whatever is designated by idCheck
  }
}
