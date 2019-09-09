const initialState = {
    isEditing: false
};

const OPEN_EDITING = 'OPEN_EDITING';
const CLOSE_EDITING = 'CLOSE_EDITING';

export default function editBook(state = initialState, action){
    switch(action.type){
        case OPEN_EDITING:
            return action.payload
        case CLOSE_EDITING: 
            return action.payload
        default: 
            return state
    }
}