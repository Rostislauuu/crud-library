const SEARCH_BOOK = 'SEARCH_BOOK';

export const searchBook = (name) => {
    const payload = {
        value: name
    }
    return{
        type: SEARCH_BOOK, 
        payload
    }
}