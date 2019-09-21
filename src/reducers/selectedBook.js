import * as Types from '../types/index';

const initialState = null;

export default function selectBook(state = initialState, action){
    switch(action.type){
        case Types.SHOW_DETAILS:
            return action.payload
        case Types.HIDE_DETAILS: 
            return null
        default: 
            return state
    }
}