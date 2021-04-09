import React from 'react'
import player from './player-data'


function StartMenu(props) {

    const handleSubmit = (evt) => {
    
        props.setState(true)
        evt.preventDefault()
    
        
    }
    return (
        <div className="startMenu">
            <h1>Ready player 1</h1>
            { props.player.name ? "Get set!!" : "Enter details on side bar"}
            <form onSubmit= { handleSubmit } >
                <button type="submit">Start</button>
            </form>
        </div>
    )
}

export default StartMenu
