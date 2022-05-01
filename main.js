import { LOADGAME, UPDATEGAME, DRAWGAME } from "./game/gameloop.js";

let lastUpdate = 0;

const run = (time) => {
  const dt = (time - lastUpdate) / 1000;
  lastUpdate = time;
  UPDATEGAME(dt);
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  DRAWGAME();
  requestAnimationFrame(run);
};

const init = () => {
  cancelAnimationFrame(run);
  console.log("Init 01");
  LOADGAME();
  requestAnimationFrame(run);
};
init();
