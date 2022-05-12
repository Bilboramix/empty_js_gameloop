import Player from "../classes/Player.js";
import { initInputs, INPUTS } from "./inputs.js";

export default class Game {
  constructor(_canvas, _boundaries) {
    this.width = _canvas.width;
    this.height = _canvas.height;
    this.player = new Player(this, 50, 50);
    initInputs(_boundaries, _canvas);
  }
  update(_dt) {
    this.player.update(_dt, INPUTS);
  }
  draw(_ctx) {
    this.player.draw(_ctx);
  }
}
