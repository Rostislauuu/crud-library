import {combineReducers} from 'redux';

import books from './books';
import filterBooks from './filterBooks';

export default combineReducers({
    books,
    filterBooks
});