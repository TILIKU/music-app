import React, {useState, useEffect} from 'react'
import { ReactSimplifiedPlayer } from "react-simplified-player"

import "./player.css"
import { useGetSongQuery } from '../services/songAPi'
import { QueryStatus } from '@reduxjs/toolkit/dist/query'

const Player = () => {
  
  const [searchWord, setsearchWord] = useState("")
  const [updated, setUpdated] = useState(searchWord)
  

  const {data:searchObj, isFetching} = useGetSongQuery(updated)

  const [playerSong, setplayerSong] = useState({song_cover: searchObj?.data?.[0]?.album?.cover.toString() || "",
                                                song_title: searchObj?.data?.[0]?.title.toString() || "",
                                                id: searchObj?.data?.[0]?.id.toString() || "",
                                                song_artist: searchObj?.data?.[0]?.artist?.name.toString() || "",
                                                url: searchObj?.data?.[0]?.preview.toString() || "",})
  

 

  if(isFetching) return "loading..."

  const searchButtonClicked = () =>{
    setUpdated("music/" + searchWord)
  }
  const chosenSongButtonClicked = (id) => {
    setplayerSong(
      {song_cover: searchObj?.data?.[id]?.album?.cover.toString() || "",
       song_title: searchObj?.data?.[id]?.title_short.toString() || "",
       id: searchObj?.data?.[id]?.id.toString() || "",
       song_artist: searchObj?.data?.[id]?.artist?.name.toString() || "",
       url: searchObj?.data?.[id]?.preview.toString() || "",}
    )
      
  }
  

  return (
    <>
    <div className='search-container'>
      <form onSubmit={searchButtonClicked}>
      <input 
        value={searchWord} 
        onChange={(e) => {setsearchWord(e.target.value)}}
        placeholder='Search'
      />
      <button
        type='submit'  
        className='search-button'
      > 
      </button>
      </form>
    </div>
      <div className='card-container'>
        {searchObj?.data?.slice(0,15)?.map((song) => (
          <div className='card' key={song.id} id={song.id}>
            <h2>{song?.title}</h2>
            <h3>{song?.artist?.name}</h3>
            <img src={song?.album?.cover}></img>
            <button className='select-song-button' onClick={() => chosenSongButtonClicked(searchObj?.data?.indexOf(song))}>play</button>
          </div>
        ))}
      </div>

      
        <div className='player-container'>
          <ReactSimplifiedPlayer 
          mainColor="#ff8400" 
          song={playerSong} 
          showQueue
          />
        </div>
    </>
  )
}

export default Player