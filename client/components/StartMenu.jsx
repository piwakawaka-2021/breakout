import React from 'react'
import player from './player-data'


function StartMenu(props) {
    return (
        <div className="startMenu">
            <h1>Ready player 1</h1>
            { player.name ? "Get set!!" : "Enter details on side bar"}
            {/* {console.log(" Player 1 go" + player.name)} */}
        </div>
    )
}

export default StartMenu
