import {combineReducers} from 'redux';

import addBooks from './addBooks';
import showBooks from './showBooks'
import filterBooks from './filterBooks';

export default combineReducers({
    addBooks,
    showBooks,
    filterBooks
});