import React, { useState, useEffect, Component } from 'react'

const App = () => {
  const gameWidth = 800
  const gameHeight = document.documentElement.clientHeight
  useEffect(() => {
    let gameArea = document.getElementById('gameCanvas')
    console.log(gameArea)
  })

  return (
    <canvas className="gameCanvas" width={gameWidth} height={gameHeight}></canvas>
  )
}

export default App