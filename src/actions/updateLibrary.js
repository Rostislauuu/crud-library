const UPDATE_LIBRARY = 'UPDATE_LIBRARY';

export const updateLibrary = (id, newName, newAuthor, newYear) => {
    const payload = {
        id,
        newName,
        newAuthor,
        newYear
    }

    return{
        type: UPDATE_LIBRARY,
        payload
    }
};