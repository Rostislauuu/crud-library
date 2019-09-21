import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {showDetails} from '../actions/showDetails';

import '../App.scss';

class BookList extends Component{
    render(){
        return(
            <div className="library">
                <ol>
                    {this.props.library.map( (book) => {
                    return <li onClick={() => this.props.onShowDetails(book)} key={book.id}
                            className="library-book">
                                {book.title}
                            </li>
                    })}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        library: state.books.book.filter( book =>
            book.title.toLowerCase().includes(state.searchBook.value.toLowerCase())  
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({onShowDetails: showDetails}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);