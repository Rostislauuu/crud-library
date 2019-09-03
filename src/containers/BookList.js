import React, {Component} from 'react';
import {connect} from 'react-redux';

import {showElement} from '../actions/showElement';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

import '../App.scss';

class BookList extends Component{
    render(){
        return(
            <div className="library">
                <ol>
                    {this.props.library.map( (book) => {
                    return <li onClick={() => this.props.showElement(book)} key={book.id}
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
        library: state.books.filter( book => book.name.includes(state.filterBooks))
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({showElement: showElement}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);