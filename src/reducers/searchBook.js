const SEARCH_BOOK = 'SEARCH_BOOK';

const initialState = {
    value: ''
};

export default function searchBook(state = initialState , action){
    switch(action.type){
        case SEARCH_BOOK: 
            return action.payload
        default: 
            return state
    }
}