import * as Types from '../types/index';

const initialState = {
    isEditing: false
};

export default function editBook(state = initialState, action){
    switch(action.type){
        case Types.OPEN_EDITING:
            return action.payload
        case Types.CLOSE_EDITING: 
            return action.payload
        default: 
            return state
    }
}