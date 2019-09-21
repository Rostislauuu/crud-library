import * as Types from '../types/index';

const initialState = {
    value: ''
};

export default function searchBook(state = initialState , action){
    switch(action.type){
        case Types.SEARCH_BOOK: 
            return action.payload
        default: 
            return state
    }
}