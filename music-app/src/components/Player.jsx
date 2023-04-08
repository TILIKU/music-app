import React, {useState, useEffect} from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"

import Search from './search'

import { useGetSongQuery } from '../services/songAPi'

const Player = () => {
  
  const [searchWord, setsearchWord] = useState("selfless")
  const [updated, setUpdated] = useState(searchWord)
  

    const {data:song, isFetching} = useGetSongQuery(updated)

  const buttonClicked = () => {
    setUpdated(searchWord)
  }
 
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

      <Search updated={updated} />


      <input 
          value={searchWord} 
          onChange={(e) => {setsearchWord(e.target.value)}}
          style={{height:"50px"}}
        />
        <button 
          onClick={buttonClicked} 
          style={{width:"100px", height:"50px"}}
        >
          cum
        </button>
        <h1>{searchWord}</h1>
        <h1>{updated}</h1>

        
        <ReactSimplifiedPlayer mainColor="#ff8400" song={QueueType} />
        <div>Player end</div>

    </>
  )
}

export default Player