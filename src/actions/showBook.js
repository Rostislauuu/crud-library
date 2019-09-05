const SHOW_BOOK = 'SHOW_BOOK';

export const showBook = (book) => {
    return{
        type: SHOW_BOOK, 
        payload: book
    }
}