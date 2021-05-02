import React from 'react'
import { useDispatch } from 'react-redux';
import { setSongs } from '../store/actions/song.actions';

export default function SearchItem({ searchWord }) {
    const dispatch = useDispatch('')
    const search = () => {
        dispatch(setSongs({ title: searchWord.word }))

    }

    return (
        <div className="search-card" onClick={search} key={searchWord.id}>
            {searchWord.word}
        </div>
    )
}
