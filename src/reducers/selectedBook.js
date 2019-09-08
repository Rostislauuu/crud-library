const initialState = null;

const SHOW_BOOK = 'SHOW_BOOK';

export default function showBooks(state = initialState, action){
    switch(action.type){
        case SHOW_BOOK:
            return action.payload
        default: 
            return state
    }
}