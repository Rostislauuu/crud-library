const SEARCH_BOOK = 'SEARCH_BOOK';
const initialState = '';

export default function filterBooks(state = initialState , action){
    switch(action.type){
        case SEARCH_BOOK: 
            return action.payload
        default: 
            return state
    }
}