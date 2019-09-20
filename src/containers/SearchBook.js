import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {searchBook} from '../actions/searchBook';

class SearchBook extends Component{
    render(){
        return(
            <div className="search-root">
                <input type="text" onChange={(e) => { this.props.onSearchBook(e.target.value)} } 
                    placeholder="Search..." className="input-field" />
            </div>       
        )        
    }
}

function mapStateToProps(state){
    return{
        searchValue: state.searchBook
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({onSearchBook: searchBook}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBook);