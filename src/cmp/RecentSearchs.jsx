import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SearchItem from './SearchItem';

export default function RecentSearchs() {
    const { searchHistory } = useSelector(state => state.songModule)
    useEffect(() => {
        return () => {
        }
    }, [searchHistory])

    if (!searchHistory.length) return <div></div>
    return (<section className="recent-search">
        <h2>Recent Searchs</h2>
        <div className="results"> {searchHistory.map(searchWord => <SearchItem key={searchWord.id} searchWord={searchWord} />)}</div>
    </section>
    )
}
