import Player from "./classes/Player.js";
import { initInputs, INPUTS } from "./inputs.js";

const entities = [];

/* Triggered once on start */
export const LOADGAME = () => {
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  initInputs(BOUNDARIES, CANVAS);

  /* Add your objects inside entities */
  entities.push(new Player(50, 50));
};

/* Update and draw loops are called on your maximum framerate */
export const UPDATEGAME = (_dt) => {
  /* This loop updates all the entities */
  for (let i = 0; i < entities.length; i++) {
    entities[i].update(_dt, INPUTS);
  }
};

/* CTX is global here. For some reason you will have to make it local but you've got to pass it here */
export const DRAWGAME = (/* _ctx */) => {
  /* This loop draw all the entities */
  for (let i = 0; i < entities.length; i++) {
    entities[i].draw();
  }
  drawText("Let's start coding !", 50, 25);
};
