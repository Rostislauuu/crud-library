const CLOSE_SEARCHING_RESULT = 'CLOSE_SEARCHING_RESULT';

export const closeSearchingResult = (name) => {
    const payload = {
        value: name,
        isSearching: false
    }
    return{
        type: CLOSE_SEARCHING_RESULT, 
        payload
    }
}