const ADD_BOOK = 'ADD_BOOK';

export const addBook = (name) => {
    const payload = {
        id: Date.now().toString(),
        name
    };

    return{
        type: ADD_BOOK, 
        payload
    }
};