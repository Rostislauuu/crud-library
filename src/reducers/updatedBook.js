import * as Types from '../types/index';

const initialState = {
    
};

export default function updateBook(state = initialState, action){
    switch(action.type){
        case Types.UPDATE_BOOK:
            return action.payload
        default: 
            return state
    }
}