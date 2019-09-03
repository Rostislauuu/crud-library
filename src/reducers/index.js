import {combineReducers} from 'redux';

import books from './books';
import songs from './songs';
import filterBooks from './filterBooks';

export default combineReducers({
    books,
    songs,
    filterBooks
});