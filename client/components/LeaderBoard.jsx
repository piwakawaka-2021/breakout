import React from "react"

// DATA
import data, { sort } from "./leaderboard-data.js"

function LeaderBoard(props) {

  function compare( a, b ) {
    if ( a.score < b.score ){
      return -1;
    }
    if ( a.score > b.score ){
      return 1;
    }
    return 0;
  }

  let sortedboard = props.leaderboard.sort( compare ).reverse().slice(0,9)

  return (
    <div className="leaderboard">
      <h2>Leader board</h2>
      {/* {console.log(props.leaderboard)} */}
      <ol className="leaderList">
        {sortedboard.map((player, i) => {
          return <li key={i}>{player.name + " Score: " + player.score}</li>
        })}
      </ol>
      <h3>Current Score</h3>
      <p> --- Display timer ----</p>
    </div>
  )
}

export default LeaderBoard
