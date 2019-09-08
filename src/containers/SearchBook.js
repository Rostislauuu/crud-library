import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {searchBook} from '../actions/searchBook';
import {closeSearching} from '../actions/closeSearching';

class SearchBook extends Component{
    constructor(props){
        super(props);
        this.searchBook = this.searchBook.bind(this);
        this.closeSearching = this.closeSearching.bind(this);
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

    closeSearching(){
        // Returning whole library
        this.props.onCloseSearching('');
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
                    <button onClick={this.closeSearching} className="close-search-button">
                        Back
                    </button>
                </div>
            )
        }
        
    }
}

function mapStateToProps(state){
    return{
        searchValue: state.filterBooks
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
                    onSearchBook: searchBook,
                    onCloseSearching: closeSearching
            }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBook);