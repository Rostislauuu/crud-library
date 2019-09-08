const initialState = {
    book: []
};
const ADD_BOOK = 'ADD_BOOK';
const UPDATE_LIBRARY = 'UPDATE_LIBRARY';

export default function addBooks(state = initialState, action){
    switch(action.type){
        case ADD_BOOK:
            return {
                book: [
                    ...state.book,
                    action.payload
                ]
            } 
        case UPDATE_LIBRARY: 
            return {
                book: state.book
            }
        default: 
            return state
    }
}