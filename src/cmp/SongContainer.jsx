import React, { useEffect, useState } from 'react'

export default function SongContainer({ songChosen }) {

    const [state, setState] = useState({ play: true, classSong: ' ' })

    const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${songChosen?.id}&auto_play=${true}`;
    const imgUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    const url = songChosen?.artwork_url || null

    useEffect(() => {
        setState({ ...state, classSong: 'not' })
        setTimeout(() => setState({ ...state, classSong: ' yes chosen' }), 1000)
        return () => {
        }
    }, [songChosen])

    const { classSong, play } = state

    if (!songChosen) return <section className="song-container ">
        <div  >
            <div className="img-container">   <img src={imgUrl} alt="" /></div>
        </div >
    </section>
    return (
        <div className="song-container" >
            <div className="img-container">
                <img className={classSong} onClick={() => setState({ ...state, play: !state.play })} src={url || imgUrl} alt="" />
            </div>
            { play &&
                <iframe title={songChosen.title} className="song-player" scrolling="no" frameBorder="no" allow="autoplay" src={src}>
                </iframe>}
        </div >
    )
}
