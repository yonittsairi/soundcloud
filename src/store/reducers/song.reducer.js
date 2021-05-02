import { storageService } from './../../service/localStorage';
const searchHistory = storageService.get('search') || []
const initState = {
    songs: [],
    songChosen: null,
    searchHistory: searchHistory,
    nextHref: null

}

export function songReducer(state = initState, action) {
    switch (action.type) {
        case 'SET':
            state = { ...state, songs: action.songs }
            return state
        case 'SET_SONG':
            state = { ...state, songChosen: action.song }
            return state
        case 'SET_SEARCH_HISTORY':
            state = { ...state, searchHistory: action.search }
            return state
        case 'SET_NEXT_HREF':
            state = { ...state, nextHref: action.nextHref }
            return state
        case 'ADD':
            state = { ...state, songs: [...state.songs, action.song] }
            return state
        case 'EDIT':
            var songs = [...state.songs]
            songs.map(c => {
                if (c._id === action.song._id) {
                    return action.song
                }
                else return c
            })
            return state
        default:
            return state
    }

}