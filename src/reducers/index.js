import {combineReducers} from 'redux';

import addBook from './addBook';
import selectedBook from './selectedBook'
import filterBooks from './filterBooks';
import editBook from './editBook';
import updatedBook from './updatedBook';

export default combineReducers({
    addBook,
    selectedBook,
    filterBooks,
    editBook, 
    updatedBook
});