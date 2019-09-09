const initialState = {
    isEditing: false
};

const OPEN_EDITING = 'OPEN_EDITING';
const CLOSE_EDIT_LIBRARY = 'CLOSE_EDIT_LIBRARY';

export default function editBook(state = initialState, action){
    switch(action.type){
        case OPEN_EDITING:
            return action.payload
        case CLOSE_EDIT_LIBRARY: 
            return action.payload
        default: 
            return state
    }
}