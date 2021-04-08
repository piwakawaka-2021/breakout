import React, { useState, useEffect, useRef } from 'react'
import data from './data.js'

const App = () => {
  const ball = data.ball
  const gameWidth = 800
  const gameHeight = 500
  // const gameHeight = document.documentElement.clientHeight
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const c = canvas.getContext('2d')
      c.clearRect(0, 0, canvas.width, canvas.height)
      c.beginPath()
      c.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
      c.fill()
      ball.x += ball.xSpeed
      ball.y += ball.ySpeed
      if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0) ball.xSpeed = -ball.xSpeed
      if (ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0) ball.ySpeed = -ball.ySpeed
      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <canvas ref={canvasRef} className="gameCanvas" width={gameWidth} height={gameHeight}></canvas>
  )
}

export default App