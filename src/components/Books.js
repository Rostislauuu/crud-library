import React, {Component} from 'react';

import AddBook from '../containers/AddBook';
import BookList from '../containers/BookList';
import SearchBook from '../containers/SearchBook';
import SelectedBook from '../containers/SelectedBook';

class Books extends Component{
    render(){
        return(
            <div className="book-root">
                <div className="first-column">
                    <h3 className="first-column-header">Add book</h3>
                    <AddBook />
                </div>

                <div className="second-column">
                    <h3 className="second-column-header">Library</h3>
                    <BookList />
                    <SearchBook />
                </div>

                <div className="third-column">
                    <h3 className="third-column-header">Details</h3>
                    <SelectedBook />    
                </div>
            </div>
        )
    }
}

export default Books;