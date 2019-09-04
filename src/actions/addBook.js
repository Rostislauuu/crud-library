const ADD_BOOK = 'ADD_BOOK';

export const addBook = (name, author, year) => {
    const payload = {
        id: Date.now().toString(),
        name,
        author,
        year
    };

    return{
        type: ADD_BOOK, 
        payload
    }
};