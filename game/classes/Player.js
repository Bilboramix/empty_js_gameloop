export default class Player {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.width = 50;
    this.height = 50;
    this.color = "#ff0000";
  }

  /* 
  Entities have their own update and draw methods to be able to loop on them
  You can create some specific behaviors with an Entity class and inheritance 
  */
  update(_dt, _inputs) {
    this.move(_dt, _inputs);
  }

  draw() {
    drawRectangle(this.x, this.y, this.width, this.height, this.color);
    this.debug();
  }

  /* Player's method called into Player.update() */
  move(_dt, _inputs) {
    if (_inputs.keyD) {
      this.x += 500 * _dt;
    }
    if (_inputs.keyA) {
      this.x -= 500 * _dt;
    }
    if (_inputs.keyS) {
      this.y += 500 * _dt;
    }
    if (_inputs.keyW) {
      this.y -= 500 * _dt;
    }
  }

  debug() {
    /* Use this function to display debug informations on screen */
    drawText("Player X " + this.x.toFixed(2), 10, window.innerHeight - 20);
  }
}
