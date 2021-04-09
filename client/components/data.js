let ball = {
  x: 50,
  y: 50,
  r: 10,
  xSpeed: 6,
  ySpeed: 6,
};

let paddle = {
  moveRight: false,
  moveLeft: false,
  w: 30,
  x: innerWidth / 2,
  y: 450,
};
export default {
  ball: ball,
  paddle: paddle,
};
