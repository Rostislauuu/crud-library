const CLOSE_SEARCHING = 'CLOSE_SEARCHING';

export const closeSearching = (name) => {
    const payload = {
        value: name,
        isSearching: false
    }
    return{
        type: CLOSE_SEARCHING, 
        payload
    }
}