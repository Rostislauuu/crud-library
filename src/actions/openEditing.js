const OPEN_EDITING = 'OPEN_EDITING';

export const openEditing = () => {
    const payload = {
        isEditing: true
    }

    return{
        type: OPEN_EDITING,
        payload
    }
};