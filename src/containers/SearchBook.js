import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

import {searchBook} from '../actions/searchBook';

class SearchBook extends Component{
    searchBook(){
        console.log('i`m searching', this.searchInput.value);
        this.props.onSearchBook(this.searchInput.value);
    }

    render(){
        return(
            <div>
                <input type="text" ref={(input) => {this.searchInput = input}} className="input-field" />
                <button onClick={this.searchBook.bind(this)} className="search-button">Search Book</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({onSearchBook: searchBook}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBook);