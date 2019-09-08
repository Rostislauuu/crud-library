const EDIT_BOOK = 'EDIT_BOOK';

export const editBook = () => {
    const payload = {
        isEditing: true
    }

    return{
        type: EDIT_BOOK,
        payload
    }
};