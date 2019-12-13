import React from 'react'
import ReactPlayer from 'react-player';


function Header() {
    return (
        <div id='player' className="player-wrapper">
        <ReactPlayer
            className="react-player" 
            url='"https://www.youtube.com/embed/bN_xq5Yi8Lw"' 
            playing
            width="100%"
            height="500px" 
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />          
        </div>
    );
}

export default Header;