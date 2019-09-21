import * as Types from '../types/index';

export const deleteBook = (id) => {
    const payload = id;

    return{
        type: Types.DELETE_BOOK, 
        payload
    }
};