import React from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"

import { useGetSongQuery } from './services/songAPi'

const Player = () => {

  const {data:song, isFetching} = useGetSongQuery("Selfless")

  console.log(song)

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
        <ReactSimplifiedPlayer mainColor="#ff8400" song={QueueType} />
        <div>Player end</div>

    </>
  )
}

export default Player