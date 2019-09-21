import * as Types from '../types/index'

export const addBook = (title, author, year) => {
    const payload = {
        id: Date.now().toString(),
        title,
        author,
        year
    };

    return{
        type: Types.ADD_BOOK, 
        payload
    }
};