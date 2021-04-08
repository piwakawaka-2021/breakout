let ball = {
  x: 400,
  y: 200,
  r: 10,
  xSpeed: 3,
  ySpeed: 3,
}

let paddle = {
  moveRight: false,
  moveLeft: false,
  w: 30,
  x: innerWidth / 2,
  y: 450,
}
export default {
  ball: ball,
  paddle: paddle,
}
