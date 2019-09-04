const SHOW_BOOK = 'SHOW_BOOK';

export const showBook = (book) => {
    alert('Book name is "' + book.name + '"');

    return{
        type: SHOW_BOOK, 
        payload: book
    }
}