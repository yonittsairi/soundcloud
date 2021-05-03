import React from 'react'
import { useSelector } from 'react-redux';
import RecentSearches from '../cmp/RecentSearches';
import SongContainer from '../cmp/SongContainer';
import Filter from './../cmp/Filter';
import SongList from './../cmp/SongList';

export default function SoundCloudApp() {
    const { songs, songChosen } = useSelector(state => state.songModule)

    return (
        <section className="container">

            <div className="song-list" >
                <Filter />
                <SongList currSongs={songs} />
            </div>
            <SongContainer songChosen={songChosen} />
            <RecentSearches />
        </section>
    )
}
