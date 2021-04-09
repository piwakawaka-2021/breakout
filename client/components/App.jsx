
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

  const [playState, setPlayState] = useState(false)
  const [player, setPlayer] = useState({ name: null, highscore: null })


  // const handlePlayState = () => {
  //   if(playState ){
  //   setPlay(true)
  // }
  // }

  // handlePlayState()

  return (
    <>
      <Header />
      <div className="main-container">
        <Player player={player} setPlayer={setPlayer} />

        {( playState && player.name ) ? <Game /> : <StartMenu player={player} setState={setPlayState} />}

        {/* <canvas ref={canvasRef} className="gameCanvas" width={gameWidth} height={gameHeight}></canvas> */}
        <LeaderBoard />
      </div>

    </>
  )
}

export default App
