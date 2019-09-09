const initialState = null;

const SHOW_SELECTED_BOOK = 'SHOW_SELECTED_BOOK';
const HIDE_DETAILS = 'HIDE_DETAILS';

export default function selectBook(state = initialState, action){
    switch(action.type){
        case SHOW_SELECTED_BOOK:
            return action.payload
        case HIDE_DETAILS: 
            return null
        default: 
            return state
    }
}