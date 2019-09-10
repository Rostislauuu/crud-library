const initialState = null;

const SHOW_DETAILS = 'SHOW_DETAILS';
const HIDE_DETAILS = 'HIDE_DETAILS';

export default function selectBook(state = initialState, action){
    switch(action.type){
        case SHOW_DETAILS:
            return action.payload
        case HIDE_DETAILS: 
            return null
        default: 
            return state
    }
}