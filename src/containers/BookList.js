import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {showBook} from '../actions/showBook';

import '../App.scss';

class BookList extends Component{
    render(){
        return(
            <div className="library">
                <ol>
                    {this.props.library.map( (book) => {
                    return <li onClick={() => this.props.showBook(book)} key={book.id}
                            className="library-book">
                                {book.name}
                            </li>
                    })}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        library: state.books.book.filter( book => book.name.includes(state.filterBooks.value))
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({showBook: showBook}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);