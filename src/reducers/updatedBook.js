const initialState = {
    
};
const UPDATE_BOOK = 'UPDATE_BOOK';

export default function addBooks(state = initialState, action){
    switch(action.type){
        case UPDATE_BOOK:
            return action.payload
        default: 
            return state
    }
}