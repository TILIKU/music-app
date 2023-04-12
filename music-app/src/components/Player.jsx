import React, {useState, useEffect} from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"


import { useGetSongQuery } from '../services/songAPi'
import { QueryStatus } from '@reduxjs/toolkit/dist/query'

const Player = () => {
  
  const [searchWord, setsearchWord] = useState("selfless")
  const [updated, setUpdated] = useState(searchWord)
  
  const {data:searchArr, isFetching} = useGetSongQuery(updated)

 

  useEffect(() => {
    const QueueType = {
      song_cover: "string",
      song_title: searchArr?.data?.[0]?.title.toString(),
      id: searchArr?.data?.[0]?.id.toString(),
      song_artist: "string",
      url: "string",
    }
  }, [updated])
   if(isFetching) return "loading..."

  const buttonClicked = () => {
    setUpdated(searchWord)
  }
 
  console.log(searchArr)
  console.log(searchArr?.data?.[0]?.link.toString())

  
  return (
    <>
      <div>Player</div>

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
        
        <ReactSimplifiedPlayer 
        mainColor="#ff8400" 
        song={
          {song_cover: searchArr?.data?.[0]?.album?.cover.toString() || "",
          song_title: searchArr?.data?.[0]?.title.toString() || "",
          id: searchArr?.data?.[0]?.id.toString() || "",
          song_artist: searchArr?.data?.[0]?.artist?.name.toString() || "",
          url: searchArr?.data?.[0]?.preview.toString() || "",}
        } 
        showQueue
        />
        <div>Player end</div>

    </>
  )
}

export default Player