const initialState = {
    book: []
};
const ADD_BOOK = 'ADD_BOOK';
const UPDATE_LIBRARY = 'UPDATE_LIBRARY';
const DELETE_BOOK = 'DELETE_BOOK';

export default function books(state = initialState, action){
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
        case DELETE_BOOK:
            return {
                book: state.book.filter( (book) => book.id !== action.payload)
            }
        default: 
            return state
    }
}