import React, {useState, useEffect} from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"

import "./player.css"
import { useGetSongQuery } from '../services/songAPi'
import { QueryStatus } from '@reduxjs/toolkit/dist/query'

const Player = () => {
  
  const [searchWord, setsearchWord] = useState("selfless")
  const [updated, setUpdated] = useState(searchWord)
  

  const {data:searchObj, isFetching} = useGetSongQuery(updated)
  const [searchArr, setsearchArr] = useState(searchObj?.data)
  

 

  if(isFetching) return "loading..."

  const buttonClicked = () => {
    setUpdated(searchWord)
    setsearchArr(searchObj?.data?.slice(0,15))
  }
  console.log(searchArr)

  return (
    <>
      <div className='card-container'>
        {searchArr?.map((song) => (
          <div className='card' key={song.id}>
            <h2>{song?.title}</h2>
            <h3>{song?.artist?.name}</h3>
            <img src={song?.album?.cover}></img>
            <button></button>
          </div>
        ))}
      </div>

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
          {song_cover: searchObj?.data?.[0]?.album?.cover.toString() || "",
          song_title: searchObj?.data?.[0]?.title.toString() || "",
          id: searchObj?.data?.[0]?.id.toString() || "",
          song_artist: searchObj?.data?.[0]?.artist?.name.toString() || "",
          url: searchObj?.data?.[0]?.preview.toString() || "",}
        } 
        showQueue
        />
    </>
  )
}

export default Player