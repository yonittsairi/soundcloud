import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadSong } from '../store/actions/song.actions';
export default function SongCard({ song }) {
    const { songChosen } = useSelector(state => state.songModule)
    const cardClass = songChosen?.id === song.id ? 'card slide-out' : 'card'
    const dispatch = useDispatch('')
    const chooseSong = () => {
        dispatch(loadSong(song))
    }
    const imgUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    return (
        <div className={cardClass} onClick={chooseSong}>
            <div className="title"  >{song.title}</div>
            <img alt={song.title} src={song.artwork_url || imgUrl}></img>
            <div className="tulip" >{song.title}</div>
        </div>

    )
}
