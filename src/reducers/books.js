const initialState = [];
const ADD_BOOK = 'ADD_BOOK';

export default function books(state = initialState, action){
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