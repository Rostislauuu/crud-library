import React, {Component} from 'react';

import AddBook from '../containers/AddBook';
import BookList from '../containers/BookList';
import SearchBook from '../containers/SearchBook';
import ShowBook from '../containers/ShowBook';

class Books extends Component{
    render(){
        return(
            <div className="book-root">
                <div className="first-column">
                    <h3 className="first-column-header">Add book</h3>
                    <AddBook />
                    <SearchBook />
                </div>

                <div className="second-column">
                    <h3 className="second-column-header">Library</h3>
                    <BookList />
                </div>

                <div className="third-column">
                    <h3 className="third-column-header">Details</h3>
                    <ShowBook />    
                </div>
            </div>
        )
    }
}

export default Books;