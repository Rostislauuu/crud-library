import * as Types from '../types/index';

export const showDetails = (book) => {
    return{
        type: Types.SHOW_DETAILS, 
        payload: book
    }
}