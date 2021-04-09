// React stuff
import React, { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Data stuff
import data from "./data.js"

// Component stuff
import Header from "./Header"
import LeaderBoard from "./LeaderBoard.jsx"
import Player from "./Player.jsx"
import StartMenu from "./StartMenu"
import Game from "./Game"

const App = () => {
  const LBdata = [
    {
      name: "Elwin",
      score: 40
    },
    {
      name: "jack",
      score: 69
    },
    {
      name: "peter",
      score: 12
    },
    {
      name: "pan",
      score: 108
    },
    {
      name: "Elwin",
      score: 40
    },
    {
      name: "jack",
      score: 69
    },
    {
      name: "peter",
      score: 12
    },
    {
      name: "pan",
      score: 108
    },
    {
      name: "Elwin",
      score: 40
  },
  {
      name: "jack",
      score: 69
  },
  {
    name: "peter",
    score: 12
},
{
    name: "pan",
    score: 108
}
  ]


  const [playState, setPlayState] = useState(false)
  const [player, setPlayer] = useState({ name: null, highScore: null })
  const [leaderboard, setLeaderBoard] = useState(LBdata)


  return (
    <>
      <Header />
      <div className="main-container">

        <Player player={player} setPlayer={setPlayer} />
        {(playState && player.name) ? <Game /> : <StartMenu player={player} setState={setPlayState} />}
        <LeaderBoard leaderboard={leaderboard} setLeaderBoard={setLeaderBoard} />
      </div>
    </>
  )
}

export default App
