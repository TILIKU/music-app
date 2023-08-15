import React from 'react'

import "./song.css"


const Song = (song) => {

    if(!song){
        song={}
    }
    console.log(song?.song)
    return(
        <>
            <div className='container'>
                <img src={song?.song?.album?.cover_medium}></img>
                <h2>{song?.song?.title}</h2>
                <h3>{song?.song?.artist?.name.length > 25 ? `${song?.song?.artist?.name.substring(0, 25)}...` : song?.song?.artist?.name}</h3>
                <h4 className="artist-two">{song?.song?.album?.title.length > 25 ? `${song?.song?.album?.title.substring(0, 25)}...` : song?.song?.album?.title}</h4>
            </div>
        </>
    )

}

export default Song