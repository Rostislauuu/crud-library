import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {addBook} from '../actions/addBook';

class AddBook extends Component{
    addBook(){
      
      let bookName = this.bookName.value;
      let bookAuthor = this.bookAuthor.value;
      let bookYear = +this.bookYear.value;   // Converting from String to a Number

        // Checking if all input fields are filled with value + have correct Type
      if(bookName && bookAuthor && bookYear){

        // If condition is true => sending all data to store using onAddBook function
        this.props.onAddBook(bookName, bookAuthor, bookYear);

        // Clearing all input fields after pressing the button
        this.bookName.value = '';
        this.bookAuthor.value = '';
        this.bookYear.value = '';  

      } 
      // If bookYear is String  
      // P.S should be a Number
      else if( isNaN(bookYear) ) {
        alert('Enter number in `Year` field');
      } 
      // If some of fields are not filled
      else {
        alert('All fields should be filled');
      }
    }

    render(){
        return(
            // making global variables from inputs using ref={}
            <div className="add-book">
              <input type="text" ref={(input) => {this.bookName = input}} placeholder="Name"
                className="input-field" />
                <br />
              
              <input type="text" ref={(input) => {this.bookAuthor = input}} placeholder="Author"
                className="input-field" />
                <br />

              <input type="text" ref={(input) => {this.bookYear = input}} placeholder="Year"
                className="input-field" />
              <br />
              
              <button onClick={this.addBook.bind(this)} className="add-button">Add Book</button>
              <br />
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({onAddBook: addBook}, dispatch);
}

export default connect(null, matchDispatchToProps)(AddBook);