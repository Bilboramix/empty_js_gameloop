/* https://www.geeksforgeeks.org/javascript-typeerror-setting-getter-only-property-x/ */

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

/* Keyboard */
export const keyPressed = (e) => {
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

export const keyReleased = (e) => {
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

/* Mouse */

export const mouseMove = (e, _boundaries) => {
  INPUTS.mouseX = e.clientX - _boundaries.left;
  INPUTS.mouseY = e.clientY - _boundaries.top;
};
export const mouseClickDown = (e) => {
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

export const mouseClickRelease = (e) => {
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

export const preventContext = (e) => {
  e.preventDefault();
};
