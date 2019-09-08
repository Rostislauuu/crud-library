const SEARCH_BOOK = 'SEARCH_BOOK';
const CLOSE_SEARCHING = 'CLOSE_SEARCHING';

const initialState = {
    value: '',
    isSearching: false
};

export default function filterBooks(state = initialState , action){
    switch(action.type){
        case SEARCH_BOOK: 
            return action.payload
        case CLOSE_SEARCHING:
            return action.payload
        default: 
            return state
    }
}