import * as Types from '../types/index';

const initialState = {
    book: []
};

export default function books(state = initialState, action){
    switch(action.type){
        case Types.ADD_BOOK:
            return {
                book: [
                    ...state.book,
                    action.payload
                ]
            } 
        case Types.DELETE_BOOK:
            return {
                // Returning new array without deleted book
                // If book.id is not equal to book`s id that we want to delete
                // => send this book to new array that we make
                book: state.book.filter( (book) => book.id !== action.payload)
            }
        default: 
            return state
    }
}