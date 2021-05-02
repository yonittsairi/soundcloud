
export const storageService = {
    save,
    get,
    clearSession,
    storeSession
}

function save(key, val) {
    const value = JSON.stringify(val)
    localStorage.setItem(key, value)

}
function get(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)

}


function clearSession() {
    sessionStorage.clear()

}
function storeSession(key, value) {
    sessionStorage[key] = JSON.stringify(value)

}