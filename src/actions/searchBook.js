const SEARCH_BOOK = 'SEARCH_BOOK';

export const searchBook = (name) => {
    const payload = {
        value: name,
        isSearching: true
    }
    return{
        type: SEARCH_BOOK, 
        payload
    }
}