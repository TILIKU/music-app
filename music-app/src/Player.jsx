import React from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"

const Player = () => {


  const QueueType = {
    song_cover: "string",
    song_title: "string",
    id: "string",
    song_artist: "string",
    url: "string",
  }
  return (
    <>
        <div>Player</div>
        <ReactSimplifiedPlayer mainColor="#ff6800" song={QueueType} />
        <div>Player end</div>

    </>
  )
}

export default Player