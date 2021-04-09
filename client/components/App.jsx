
// React stuff
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Data stuff
import data from './data.js'

// Component stuff
import Header from './Header'
import LeaderBoard from './LeaderBoard.jsx'
import Player from './Player.jsx'

const App = () => {
  window.addEventListener("keydown", checkKeyDown, false)
  window.addEventListener("keyup", checkKeyUp, false,)
  var deltaX = 0
  var deltaY = 0

  const ball = data.ball
  const paddle = data.paddle
  const gameWidth = 800
  const gameHeight = 500
  // const gameHeight = document.documentElement.clientHeight
  const canvasRef = useRef(null)

  function checkKeyDown(e) {
    switch (e.key) {
      case "ArrowRight":
        paddle.moveRight = true
        e.preventDefault()

        // deltaX = Math.max(paddle.x - 20, -170)
        break
      case "ArrowLeft":
        paddle.moveLeft = true
        e.preventDefault()

        // deltaX = Math.min(paddle.x + 20, gameWidth - 230)
        break
    }
    // e.preventDefault()
  }

  function checkKeyUp(e) {
    switch (e.key) {
      case "ArrowRight":
        paddle.moveRight = false
        // deltaX = Math.max(paddle.x - 20, -170)
        break
      case "ArrowLeft":
        paddle.moveLeft = false
        // deltaX = Math.min(paddle.x + 20, gameWidth - 230)
        break
    }
    // e.preventDefault()
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
      if (paddle.x + 30 <= gameWidth && paddle.moveRight) paddle.x += 6
      if (paddle.x - 30 >= 0 && paddle.moveLeft) paddle.x -= 6

      //check ball collision
      if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0)
        ball.xSpeed = -ball.xSpeed
      if (ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0)
        ball.ySpeed = -ball.ySpeed
      if (
        ball.x - ball.r <= paddle.x + paddle.w &&
        ball.x + ball.r >= paddle.x - paddle.w &&
        ball.y + ball.r >= paddle.y - 10
      ) {
        //console.log("colliding")
        ball.ySpeed = -ball.ySpeed
      }

      //draw paddle
      c.beginPath()
      c.lineTo(paddle.x - paddle.w, paddle.y)
      c.lineTo(paddle.x + paddle.w, paddle.y)
      c.closePath()
      c.lineWidth = 10
      c.strokeStyle = "rgba(102, 102, 102, 1)"
      c.stroke()

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        <Player />
        <canvas ref={canvasRef} className="gameCanvas" width={gameWidth} height={gameHeight}></canvas>
        <LeaderBoard />
      </div>

    </>
  )
}

export default App
