import { storageService } from './localStorage';
import { UtilService } from './UtilService';
import Axios from 'axios'


var axios = Axios.create({})
var SC = require('soundcloud');



export const soundCloudService = {
    getSongs,
    getNextSongs,
    playSong
}

SC.initialize({
    client_id: 'ggX0UomnLs0VmW7qZnCzw ',
});



async function getSongs(query) {
    const limit = 6
    const access = 'playble'
    let searchHistory = _saveSearch(query)
    try {
        let list = await SC.get(`/tracks?q=${query}&limit=${limit}&linked_partitioning=${true}&access=${access}`)
        const { collection, next_href } = list
        return [collection, searchHistory, next_href]
    }
    catch (err) {
        console.log(err);

    }
}


async function getNextSongs(nextHref) {
    try {
        var list = await axios.get(nextHref)
        const { collection, next_href } = list.data
        console.log();
        return [collection, next_href]
    }

    catch (err) {
        console.log(err);

    }
}
export async function playSong() {
    try {
        const player = SC.stream('/tracks/293')
        player.play()

    }
    catch (err) {
        console.log(err);

    }


}

function _saveSearch(searchWord) {
    const searchHistory = storageService.get('search') || []
    if (searchHistory.length === 5) searchHistory.pop()
    const id = UtilService.makeId()
    searchHistory.unshift({ word: searchWord, id })
    storageService.save('search', searchHistory)
    return searchHistory
}