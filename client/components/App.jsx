
// React stuff
import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Data stuff
import data from './data.js'

// Component stuff
import Header from './Header'
import LeaderBoard from './LeaderBoard.jsx'
import Player from './Player.jsx'
import StartMenu from './StartMenu'
import Game from './Game'

const App = () => {
  const [ playState, setPlayState] = useState(true)

  

  return (
    <>
      <Header />
      <div className="main-container">
        <Player />
        { playState ? <Game /> : <StartMenu state={playState}/> }
        
        {/* <canvas ref={canvasRef} className="gameCanvas" width={gameWidth} height={gameHeight}></canvas> */}
        <LeaderBoard />
      </div>

    </>
  )
}

export default App
