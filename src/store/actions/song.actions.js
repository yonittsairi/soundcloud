import { soundCloudService } from './../../service/soundcloudService';




export function setSongs(query) {
    return async (dispatch) => {
        try {
            const [songs, searchHistory, nextHref] = await soundCloudService.getSongs(query.title)
            dispatch({ type: 'SET', songs: songs })
            dispatch({ type: 'SET_SEARCH_HISTORY', search: searchHistory })
            dispatch({ type: 'SET_NEXT_HREF', nextHref: nextHref })
        } catch (error) {
            console.error('problem loading songs', error)
        }
    }
}





export function getNextSongs(nexthref) {
    return async (dispatch) => {
        try {
            const [songs, href] = await soundCloudService.getNextSongs(nexthref)
            console.log(songs);
            dispatch({ type: 'SET', songs: songs })
            dispatch({ type: 'SET_NEXT_HREF', nextHref: href })
        } catch (error) {
            console.error('problem loading songs', error)
        }
    }
}

export function loadSong(song) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_SONG', song: song })
        } catch (error) {
            console.error('problem loading song')
        }
    }
}
// export function setSearchWord(word) {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: 'SET_SEARCH_WORD', searchWord: word })
//         } catch (error) {
//             console.error('problem loading song')
//         }
//     }
// }
