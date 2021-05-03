import { storageService } from './localStorage';
import { UtilService } from './UtilService';
import Axios from 'axios'


var axios = Axios.create({})
var SC = require('soundcloud');



export const soundCloudService = {
    getSongs,
    getNextSongs,
}

SC.initialize({
    client_id: 'ggX0UomnLs0VmW7qZnCzw ',
});



async function getSongs(query) {
    const searchHistory = _saveSearch(query)
    try {
        let list = await SC.get(`/tracks?q=${query}&limit=${6}&linked_partitioning=${true}`)

        const { collection, next_href } = list
        if (collection.length < 6) {
            const [collection1, next_href2] = await getNextSongs(next_href)
            return [collection1, searchHistory, next_href2]
        }
        else return [collection, searchHistory, next_href]
    }
    catch (err) {
        console.log(err);

    }
}


async function getNextSongs(nextHref) {
    try {
        let list = await axios.get(nextHref)
        const { collection, next_href } = list.data
        if (collection.length < 6) {
            let [collection1, next_href2] = await getNextSongs(next_href)
            return [collection1, next_href2]
        }
        else return [collection, next_href]
    }

    catch (err) {
        console.log(err);

    }
}

function _saveSearch(searchWord) {
    const historyLimit = 5
    const searchHistory = storageService.get('search') || []
    let itemExists = searchHistory.some(item => item.word === searchWord);
    if (itemExists) { return searchHistory }
    else {
        if (searchHistory.length === historyLimit) searchHistory.pop()
        const id = UtilService.makeId()
        searchHistory.unshift({ word: searchWord, id })
        storageService.save('search', searchHistory)
        return searchHistory
    }
}