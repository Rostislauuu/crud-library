import * as Types from '../types/index';

export const updateBook = (id, newTitle, newAuthor, newYear) => {
    const payload = {
        id,
        newTitle,
        newAuthor,
        newYear
    }

    return{
        type: Types.UPDATE_BOOK,
        payload
    }
};