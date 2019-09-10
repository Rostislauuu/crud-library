const CLOSE_EDITING = 'CLOSE_EDITING';

export const closeEditing = () => {
    const payload = {
        isEditing: false
    }

    return{
        type: CLOSE_EDITING,
        payload
    }
};