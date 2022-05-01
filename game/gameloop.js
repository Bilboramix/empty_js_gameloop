import Player from "./classes/Player.js";
import { keyPressed, keyReleased, mouseMove, mouseClickDown, mouseClickRelease, preventContext, INPUTS } from "./inputs.js";
const BOUNDARIES = CANVAS.getBoundingClientRect();

const player = new Player(50, 50);

export const LOADGAME = () => {
  document.addEventListener("keydown", keyPressed, false);
  document.addEventListener("keyup", keyReleased, false);
  document.addEventListener(
    "mousemove",
    (e) => {
      mouseMove(e, BOUNDARIES);
    },
    false
  );
  CANVAS.addEventListener("mousedown", mouseClickDown, false);
  CANVAS.addEventListener("mouseup", mouseClickRelease, false);
  CANVAS.addEventListener("contextmenu", preventContext, false);
};

export const UPDATEGAME = (_dt) => {
  player.update(_dt, INPUTS);
};

export const DRAWGAME = () => {
  player.draw();
};
