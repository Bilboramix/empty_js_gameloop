/* This file can be used as a global lib to manipulate canvas's methods that will be used in the gameloop without importation */
/* Import can be needed if you decide to implement the game on another web project */

const drawRectangle = (_ctx, _squareProps) => {
  _ctx.beginPath();
  _ctx.rect(_squareProps.x, _squareProps.y, _squareProps.width, _squareProps.height);
  _ctx.fillStyle = _squareProps.color;
  _ctx.fill();
  _ctx.closePath();
};

const drawCircle = (_ctx, _circleProps) => {
  _ctx.beginPath();
  _ctx.arc(_circleProps.x, _circleProps.y, _circleProps.r, 0, 2 * Math.PI);
  _ctx.fillStyle = _circleProps.color;
  _ctx.fill();
  _ctx.closePath();
};

const drawText = (_ctx, _txt, _x, _y, _color, _fontProperties) => {
  if (_color) {
    _ctx.fillStyle = _color;
  } else {
    _ctx.fillStyle = "Black";
  }
  if (_fontProperties) {
    _ctx.font = _fontProperties;
  } else {
    _ctx.font = "normal 14pt Arial";
  }
  _ctx.fillText(_txt, _x, _y);
};

const drawLine = (_ctx, _xa, _ya, _xb, _yb, _color) => {
  _ctx.beginPath();
  if (_color) {
    _ctx.strokeStyle = _color;
  } else {
    _ctx.strokeStyle = "Black";
  }
  _ctx.moveTo(_xa, _ya);
  _ctx.lineTo(_xb, _yb);
  _ctx.stroke();
  _ctx.closePath();
};
