import React from 'react'

// DATA
import data from "./leaderboard-data.js"

function LeaderBoard() {
    return (
        <div className="leaderboard">
            <h2>Leader board</h2>
            {console.log(data)}
            <ul>
                {data.map((player, i )=> {
                    return (
                        <li key={i}>
                            {player.name}
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}

export default LeaderBoard