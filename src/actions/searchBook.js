import * as Types from '../types/index';

export const searchBook = (title) => {
    const payload = {
        value: title
    }
    return{
        type: Types.SEARCH_BOOK, 
        payload
    }
}