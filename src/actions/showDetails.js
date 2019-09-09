const SHOW_DETAILS = 'SHOW_DETAILS';

export const showDetails = (book) => {
    return{
        type: SHOW_DETAILS, 
        payload: book
    }
}