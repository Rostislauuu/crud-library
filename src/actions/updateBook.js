const UPDATE_BOOK = 'UPDATE_BOOK';

export const updateBook = (id, newName, newAuthor, newYear) => {
    const payload = {
        id,
        newName,
        newAuthor,
        newYear
    }

    return{
        type: UPDATE_BOOK,
        payload
    }
};