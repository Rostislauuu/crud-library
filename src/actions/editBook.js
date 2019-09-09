const OPEN_EDITING = 'OPEN_EDITING';

export const editBook = () => {
    const payload = {
        isEditing: true
    }

    return{
        type: OPEN_EDITING,
        payload
    }
};