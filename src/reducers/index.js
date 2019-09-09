import {combineReducers} from 'redux';

import books from './books';
import selectedBook from './selectedBook'
import searchBook from './searchBook';
import editBook from './editBook';
import updatedBook from './updatedBook';

export default combineReducers({
    books,
    selectedBook,
    searchBook,
    editBook, 
    updatedBook
});