import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {searchBook} from '../actions/searchBook';
import {closeSearchingResult} from '../actions/closeSearching';

class SearchBook extends Component{
    constructor(props){
        super(props);
        this.searchBook = this.searchBook.bind(this);
        this.closeSearchingResult = this.closeSearchingResult.bind(this);
    }

    searchBook(){
        const searchValue = this.searchInput.value;
        
        // Checking if Search Input tag is filled with value
        if(searchValue){
            // If true => searching for needed book
            this.props.onSearchBook(this.searchInput.value);
        }
        else {
            // Not allowing to search
            alert('You are looking for nothing')
        }
    }

    closeSearchingResult(){
        // Returning whole library
        this.props.onCloseSearchingResult('');
    }

    render(){
        if(!this.props.searchValue.isSearching){
            return(
                <div className="search-root">
                    <input type="text" ref={(input) => {this.searchInput = input}} placeholder="Search..."
                    className="input-field" />
    
                    <br />
    
                    <button onClick={this.searchBook} className="search-button">
                        Search
                    </button>
                </div>
            )
        }
        else{
            return(
                <div className="close-search-root">
                    <button onClick={this.closeSearchingResult} className="close-search-button">
                        Back
                    </button>
                </div>
            )
        }
        
    }
}

function mapStateToProps(state){
    return{
        searchValue: state.searchBook
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
                    onSearchBook: searchBook,
                    onCloseSearchingResult: closeSearchingResult
            }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBook);