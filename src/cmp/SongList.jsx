import React, { useState, useEffect, useRef } from 'react'
import SongCard from './SongCard'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import { storageService } from './../service/localStorage';
import { useSelector, useDispatch } from 'react-redux';

import { getNextSongs } from '../store/actions/song.actions'

export default function SongList({ currSongs }) {
    const { nextHref } = useSelector(state => state.songModule)

    const dispatch = useDispatch('')


    const [className, setsClass] = useState('list')

    const paginate = () => {
        dispatch(getNextSongs(nextHref))
    }


    const changeView = (classname) => {
        setsClass(classname)
        storageService.save('className', classname)
    }
    useEffect(() => {
        let className = storageService.get('className') || 'list'
        setsClass(className)
        return () => {
        }
    }, [])

    if (!currSongs.length) return <div></div>

    return (
        <section className="results">

            <div className={className}>
                {currSongs.map(song => <SongCard key={song.id} song={song} />
                )}

            </div>
            <div className="menu flex align-center space-between">
                <div className="flex align-center">
                    <ViewListIcon fontSize={'large'} onClick={() => changeView('list')} />
                    <ViewComfyIcon fontSize={'large'} onClick={() => changeView('tile')} />
                </div>
                {nextHref && <ArrowForwardTwoToneIcon fontSize={'large'} onClick={paginate} />}
            </div>


        </section>
    )
}
