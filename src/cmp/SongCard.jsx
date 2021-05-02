import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadSong } from '../store/actions/song.actions';

export default function SongCard({ song }) {
    const dispatch = useDispatch('')
    const chooseSong = () => {
        dispatch(loadSong(song))
    }
    return (
        <a className="slide-bl">  <div className="card" onClick={chooseSong}>
            <div>{song.title}</div>
            <img src={song.artwork_url}></img>
        </div></a>
    )
}
