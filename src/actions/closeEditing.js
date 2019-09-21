import * as Types from '../types/index';

export const closeEditing = () => {
    const payload = {
        isEditing: false
    }

    return{
        type: Types.CLOSE_EDITING,
        payload
    }
};