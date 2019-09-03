const SEARCH_BOOK = 'SEARCH_BOOK';

export const searchBook = (name) => {
    return{
        type: SEARCH_BOOK, 
        payload: name
    }
}