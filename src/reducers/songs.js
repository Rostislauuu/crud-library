const LOAD_SONGS = 'LOAD_SONGS';
const initialState = [];

export default function songs(state = initialState, action) {
    switch(action.type){
        case LOAD_SONGS:
            return action.payload
        default: 
            return state
    }
}