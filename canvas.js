/* This file can be used as a global lib to manipulate canvas's methods that will be used in the gameloop without importation */
/* Import can be needed if you decide to implement the game on another web project */

const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const BOUNDARIES = CANVAS.getBoundingClientRect();

const drawRectangle = (_x, _y, _width, _height, _color) => {
  CTX.beginPath();
  CTX.rect(_x, _y, _width, _height);
  CTX.fillStyle = _color;
  CTX.fill();
  CTX.closePath();
};

const drawCircle = (_x, _y, _r, _color) => {
  CTX.beginPath();
  CTX.arc(_x, _y, _r, 0, 2 * Math.PI);
  CTX.fillStyle = _color;
  CTX.fill();
  CTX.closePath();
};

const drawText = (_txt, _x, _y, _color, _fontProperties) => {
  if (_color) {
    CTX.fillStyle = _color;
  } else {
    CTX.fillStyle = "Black";
  }
  if (_fontProperties) {
    CTX.font = _fontProperties;
  } else {
    CTX.font = "normal 14pt Arial";
  }
  CTX.fillText(_txt, _x, _y);
};

const drawLine = (_xa, _ya, _xb, _yb, _color) => {
  CTX.beginPath();
  if (_color) {
    CTX.strokeStyle = _color;
  } else {
    CTX.strokeStyle = "Black";
  }
  CTX.moveTo(_xa, _ya);
  CTX.lineTo(_xb, _yb);
  CTX.stroke();
  CTX.closePath();
};
