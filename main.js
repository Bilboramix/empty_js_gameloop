import Game from "./game/core/Game.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const boundaries = canvas.getBoundingClientRect();
  const game = new Game(canvas, boundaries);
  let lastUpdate = 0;

  const run = (time) => {
    const dt = (time - lastUpdate) / 1000;
    lastUpdate = time;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(run);
  };
  run();
});
