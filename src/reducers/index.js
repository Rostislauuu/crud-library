import {combineReducers} from 'redux';

import books from './books';
import selectedBook from './selectedBook'
import filterBooks from './filterBooks';
import editBook from './editBook';
import updatedBook from './updatedBook';

export default combineReducers({
    books,
    selectedBook,
    filterBooks,
    editBook, 
    updatedBook
});