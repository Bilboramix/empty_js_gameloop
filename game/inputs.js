/* Input states */
export const INPUTS = {
  mouseX: 0,
  mouseY: 0,
  mouseClick1: false,
  mouseClick2: false,
  keyRight: false,
  keyLeft: false,
  keyUp: false,
  keyDown: false,
  keyDash: false,
  keyLoot: false,
  keyAbility: false,
  keyUltimate: false,
};

/* Keyboard : Setting the state of the inputs depending of keycode to avoid QWERTY/AZERTY/etc... conflicts */
const keyPressed = (e) => {
  e.preventDefault();
  if (e.code === "KeyD") {
    INPUTS.keyRight = true;
  }
  if (e.code === "KeyA") {
    INPUTS.keyLeft = true;
  }
  if (e.code === "KeyW") {
    INPUTS.keyUp = true;
  }
  if (e.code === "KeyS") {
    INPUTS.keyDown = true;
  }
  if (e.code === "ShiftLeft") {
    INPUTS.keyDash = true;
  }
  if (e.code === "KeyE") {
    INPUTS.keyLoot = true;
  }
  if (e.code === "KeyQ") {
    INPUTS.keyAbility = true;
  }
  if (e.code === "Space") {
    INPUTS.keyUltimate = true;
  }
};

const keyReleased = (e) => {
  e.preventDefault();
  if (e.code === "KeyD") {
    INPUTS.keyRight = false;
  }
  if (e.code === "KeyA") {
    INPUTS.keyLeft = false;
  }
  if (e.code === "KeyW") {
    INPUTS.keyUp = false;
  }
  if (e.code === "KeyS") {
    INPUTS.keyDown = false;
  }
  if (e.code === "ShiftLeft") {
    INPUTS.keyDash = false;
  }
  if (e.code === "KeyE") {
    INPUTS.keyLoot = false;
  }
  if (e.code === "KeyQ") {
    INPUTS.keyAbility = false;
  }
  if (e.code === "Space") {
    INPUTS.keyUltimate = false;
  }
};

/* Mouse inputs : We need boundaries of the viewport so the canvas can be placed anywhere on the page */
const mouseTrack = (e, _boundaries) => {
  INPUTS.mouseX = e.clientX - _boundaries.left;
  INPUTS.mouseY = e.clientY - _boundaries.top;
};

const mouseClickDown = (e) => {
  if (e.buttons === 1) {
    INPUTS.mouseClick1 = true;
  }
  if (e.buttons === 2) {
    INPUTS.mouseClick2 = true;
  }
  if (e.buttons === 3) {
    INPUTS.mouseClick1 = true;
    INPUTS.mouseClick2 = true;
  }
};

const mouseClickRelease = (e) => {
  if (e.buttons == 0) {
    INPUTS.mouseClick1 = false;
    INPUTS.mouseClick2 = false;
  }
  if (e.buttons === 1) {
    INPUTS.mouseClick1 = true;
  }
  if (e.buttons === 2) {
    INPUTS.mouseClick2 = true;
  }
};

/* To prevent opening of context menu for right click, on the canvas */
const preventContext = (e) => {
  e.preventDefault();
};
/* The resize event listener is here to make canvas responsive */
/* Note : all inputs event listeners can be placed on canvas to avoid conflict with a webpage, it's making them triggering on focus only */
export const initInputs = (_boundaries, _canvas) => {
  window.addEventListener("resize", (e) => {
    console.log("resize !");
    _canvas.width = window.innerWidth;
    _canvas.height = window.innerHeight;
  });
  document.addEventListener(
    "mousemove",
    (e) => {
      console.log("mouseMove !");
      mouseTrack(e, _boundaries);
    },
    false
  );
  document.addEventListener("keydown", keyPressed, false);
  document.addEventListener("keyup", keyReleased, false);
  _canvas.addEventListener("mousedown", mouseClickDown, false);
  _canvas.addEventListener("mouseup", mouseClickRelease, false);
  _canvas.addEventListener("contextmenu", preventContext, false);
};
