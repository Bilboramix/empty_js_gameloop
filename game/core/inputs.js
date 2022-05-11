/* Input states */
export const INPUTS = {
  mouseX: 0,
  mouseY: 0,
  mouseClick1: false,
  mouseClick2: false,
  keyD: false,
  keyA: false,
  keyW: false,
  keyS: false,
  keyLShift: false,
  keyE: false,
  keyQ: false,
  keySpace: false,
};

/* The resize event listener is here to make canvas responsive */
/* Note : all inputs event listeners can be placed on canvas to avoid conflict with a webpage, it's making them triggering on focus only */
export const initInputs = (_boundaries, _canvas) => {
  window.addEventListener("resize", (e) => {
    _canvas.width = window.innerWidth;
    _canvas.height = window.innerHeight;
  });
  document.addEventListener(
    "mousemove",
    (e) => {
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

/* Keyboard : Setting the state of the inputs depending of keycode to avoid QWERTY/AZERTY/etc... conflicts */
/* Controls have to be handle with US standard keycode */
const keyPressed = (e) => {
  e.preventDefault();
  if (e.code === "KeyD") {
    INPUTS.keyD = true;
  }
  if (e.code === "KeyA") {
    INPUTS.keyA = true;
  }
  if (e.code === "KeyW") {
    INPUTS.keyW = true;
  }
  if (e.code === "KeyS") {
    INPUTS.keyS = true;
  }
  if (e.code === "ShiftLeft") {
    INPUTS.keyLShift = true;
  }
  if (e.code === "KeyE") {
    INPUTS.keyE = true;
  }
  if (e.code === "keyQ") {
    INPUTS.keyQ = true;
  }
  if (e.code === "Space") {
    INPUTS.keySpace = true;
  }
};

const keyReleased = (e) => {
  e.preventDefault();
  if (e.code === "KeyD") {
    INPUTS.keyD = false;
  }
  if (e.code === "KeyA") {
    INPUTS.keyA = false;
  }
  if (e.code === "KeyW") {
    INPUTS.keyW = false;
  }
  if (e.code === "KeyS") {
    INPUTS.keyS = false;
  }
  if (e.code === "ShiftLeft") {
    INPUTS.keyLShift = false;
  }
  if (e.code === "KeyE") {
    INPUTS.keyE = false;
  }
  if (e.code === "keyQ") {
    INPUTS.keyQ = false;
  }
  if (e.code === "Space") {
    INPUTS.keySpace = false;
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
    INPUTS.mouseClick1 = false;
  }
  if (e.buttons === 2) {
    INPUTS.mouseClick2 = false;
  }
};

/* To prevent opening of context menu for right click, on the canvas */
const preventContext = (e) => {
  e.preventDefault();
};
