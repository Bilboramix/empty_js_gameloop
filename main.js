import { LOADGAME, UPDATEGAME, DRAWGAME } from "./game/gameloop.js";

/*
  - If you're using this in a React environment, you should run this inside an useEffect hook.
  - The requestAnimationFrame() method is running the loop on your max screen framerate.
  - Delta time (dt), is time elapsed since last frame and is needed if you need accuracy between computers, for all your movement calculations

    1 * dt = 1 per second 
    1/dt = your framerate
*/

let lastUpdate = 0;

/* 
This is the main gameloop, you should not add game's behavior here.
*/
const run = (time) => {
  const dt = (time - lastUpdate) / 1000;
  lastUpdate = time;
  UPDATEGAME(dt);
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  DRAWGAME();
  requestAnimationFrame(run);
};

/*
This is the starting function for the loop
*/
const init = () => {
  cancelAnimationFrame(run);
  console.log("Init 01");
  LOADGAME();
  requestAnimationFrame(run);
};

init();
