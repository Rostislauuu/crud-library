const CLOSE_EDIT_LIBRARY = 'CLOSE_EDIT_LIBRARY';

export const closeEditLibrary = () => {
    const payload = {
        isEditing: false
    }

    return{
        type: CLOSE_EDIT_LIBRARY,
        payload
    }
};