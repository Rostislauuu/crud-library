const initialState = {
    isEditing: false
};

const EDIT_BOOK = 'EDIT_BOOK';
const CLOSE_EDIT_LIBRARY = 'CLOSE_EDIT_LIBRARY';

export default function addBooks(state = initialState, action){
    switch(action.type){
        case EDIT_BOOK:
            return action.payload
        case CLOSE_EDIT_LIBRARY: 
            return action.payload
        default: 
            return state
    }
}