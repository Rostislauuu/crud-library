import React, {Component} from 'react';

import AddBook from '../containers/AddBook';
import BookList from '../containers/BookList';
import SearchBook from '../containers/SearchBook';

class Books extends Component{
    render(){
        return(
            <div>
                <AddBook />
                <SearchBook />
                <BookList />
            </div>
        )
    }
}

export default Books;