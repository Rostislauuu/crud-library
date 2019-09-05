const initialState = [];
const ADD_BOOK = 'ADD_BOOK';

export default function addBooks(state = initialState, action){
    switch(action.type){
        case ADD_BOOK:
            return[
                ...state,
                action.payload
            ]
        default: 
            return state
    }
}