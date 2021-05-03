import React, { useEffect, useState } from 'react'


export default function SongContainer({ songChosen }) {
    const [play, setPlay] = useState(false)
    const [classSong, setclassSong] = useState('')
    const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${songChosen?.id}&auto_play=${true}`
    useEffect(() => {
        classSong === 'chosen' ? setclassSong('') : setclassSong('chosen')
        setPlay(!play)
        return () => {
        }
    }, [songChosen])

    const imgUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    if (!songChosen) return <section className="song-container ">
        <div  >
            <div className="img-container">   <img src={imgUrl} alt="" /></div>
        </div >
    </section>
    return (
        <div className="song-container" >
            <div className="img-container">
                <img className={classSong} onClick={() => setPlay(!play)} src={songChosen.artwork_url || imgUrl} alt="" />
            </div>
            { play &&
                <iframe title={songChosen.title} className="song-player" scrolling="no" frameBorder="no" allow="autoplay" src={src}>
                </iframe>}
        </div >
    )
}
