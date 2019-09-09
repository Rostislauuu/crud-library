const SHOW_SELECTED_BOOK = 'SHOW_SELECTED_BOOK';

export const showBook = (book) => {
    return{
        type: SHOW_SELECTED_BOOK, 
        payload: book
    }
}