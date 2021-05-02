import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SearchItem from './SearchItem';

export default function RecentSearchs() {
    const { searchHistory } = useSelector(state => state.songModule)
    const dispatch = useDispatch('')
    useEffect(() => {
        return () => {
        }
    }, [searchHistory])

    if (!searchHistory.length) return <div></div>
    return (<section className="recent-search">
        <h2>Recent Searchs</h2>
        {searchHistory.map(searchWord => <SearchItem key={searchWord.id} searchWord={searchWord} />)}
    </section>
    )
}
