export default class Player {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.width = 50;
    this.height = 50;
    this.color = "#ff0000";
  }

  draw() {
    drawRectangle(this.x, this.y, this.width, this.height, this.color);
  }

  update(_dt, _inputs) {
    this.move(_dt, _inputs);
  }

  move(_dt, _inputs) {
    if (_inputs.keyRight) {
      this.x += 500 * _dt;
    }
    if (_inputs.keyLeft) {
      this.x -= 500 * _dt;
    }
    if (_inputs.keyDown) {
      this.y += 500 * _dt;
    }
    if (_inputs.keyUp) {
      this.y -= 500 * _dt;
    }
  }

  debug() {}
}
