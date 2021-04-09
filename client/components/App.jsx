import React, { useState, useEffect, useRef } from "react"
import data from "./data.js"
import Header from "./Header"
import LeaderBoard from "./LeaderBoard.jsx"
import Player from "./Player.jsx"

const App = () => {
  window.addEventListener("keydown", checkKeyDown, false)
  window.addEventListener("keyup", checkKeyUp, false)

  const ball = data.ball
  const paddle = data.paddle
  const gameWidth = 800
  const gameHeight = 500
  // const gameHeight = document.documentElement.clientHeight
  const canvasRef = useRef(null)

  //init bricks
  const [bricks, setBricks] = useState(data.generateBricks(7, 3))

  function checkKeyDown(e) {
    switch (e.keyCode) {
      case 39:
        paddle.moveRight = true
        break
      case 37:
        paddle.moveLeft = true
        break
    }
    e.preventDefault()
  }

  function checkKeyUp(e) {
    switch (e.keyCode) {
      case 39:
        paddle.moveRight = false
        break
      case 37:
        paddle.moveLeft = false
        break
    }
    e.preventDefault()
  }

  useEffect(() => {
    const render = () => {
      //establish context
      const canvas = canvasRef.current
      const c = canvas.getContext("2d")

      //clear canvas
      c.clearRect(0, 0, canvas.width, canvas.height)

      //draw ball
      c.beginPath()
      c.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
      c.fill()
      ball.x += ball.xSpeed
      ball.y += ball.ySpeed

      // move paddle
      if (paddle.x + paddle.w <= gameWidth && paddle.moveRight) paddle.x += 7
      if (paddle.x >= 0 && paddle.moveLeft) paddle.x -= 7

      //check ball collision with wall
      if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0)
        ball.xSpeed = -ball.xSpeed
      if (ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0)
        ball.ySpeed = -ball.ySpeed

      //check ball collision with paddle
      const paddleCheckResult = data.checkBrickCollision(ball, paddle)
      if (paddleCheckResult.hit) {
        if (paddleCheckResult.axis === "X") {
          ball.xSpeed = -ball.xSpeed
        } else if (paddleCheckResult.axis === "Y") {
          ball.ySpeed = -ball.ySpeed
        }
      }

      //check ball collisions with bricks

      for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].intact) {
          let brickCheckResult = data.checkBrickCollision(ball, bricks[i])
          if (brickCheckResult.hit) {
            if (brickCheckResult.axis === "X") {
              ball.xSpeed = -ball.xSpeed
            } else if (brickCheckResult.axis === "Y") {
              ball.ySpeed = -ball.ySpeed
            }
            bricks[i].intact = false

            // const newBrick = {
            //   ...bricks[i],
            //   intact: false,
            // }

            // const newBricks = [...bricks]
            // newBricks[i] = newBricks
            // setBricks(newBricks)
          }
        }
      }

      //draw paddle
      c.beginPath()
      c.fillStyle = "green"
      c.fillRect(paddle.x, paddle.y, paddle.w, paddle.h)
      c.closePath()
      c.strokeStyle = "rgba(102, 102, 102, 1)"
      c.stroke()

      //draw bricks

      for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].intact) {
          c.beginPath()
          c.fillStyle = "rgba(80, 46, 78, 1)"
          c.fillRect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h)
          c.closePath()
          c.stroke()
        }
      }

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        <Player />
        <canvas
          ref={canvasRef}
          className="gameCanvas"
          width={gameWidth}
          height={gameHeight}
        ></canvas>
        <LeaderBoard />
      </div>
    </>
  )
}

export default App
