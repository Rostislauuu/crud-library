const DELETE_BOOK = 'DELETE_BOOK';

export const deleteBook = (id) => {
    const payload = id;

    return{
        type: DELETE_BOOK, 
        payload
    }
};