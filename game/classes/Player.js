import Entity from "./Entity.js";
export default class Player extends Entity {
  constructor(_game, _x, _y) {
    super(_x, _y);
    this.width = 50;
    this.height = 50;
    this.color = "#ff0000";
  }

  update(_dt, _inputs) {
    this.move(_dt, _inputs);
  }

  draw(_ctx) {
    drawRectangle(_ctx, this.x, this.y, this.width, this.height, this.color);
    this.debug(_ctx);
  }
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

  debug(_ctx) {
    drawText(_ctx, "Player X " + this.x.toFixed(2), 10, window.innerHeight - 20);
  }
}
