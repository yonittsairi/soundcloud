import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RecentSearchs from '../cmp/RecentSearchs';
import SongContainer from '../cmp/SongContainer';
import Filter from './../cmp/Filter';
import SongList from './../cmp/SongList';

export default function SoundCloudApp() {
    const { songs, songChosen } = useSelector(state => state.songModule)

    return (
        <section className="container">
            <section className="song-list" ><Filter />
                <SongList currSongs={songs} />
            </section>
            <SongContainer songChosen={songChosen} />
            <RecentSearchs />
        </section>
    )
}
