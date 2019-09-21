import * as Types from '../types/index';

export const openEditing = () => {
    const payload = {
        isEditing: true
    }

    return{
        type: Types.OPEN_EDITING,
        payload
    }
};