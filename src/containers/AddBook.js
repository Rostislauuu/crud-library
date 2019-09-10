import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {addBook} from '../actions/addBook';

class AddBook extends Component{
    constructor(props){
      super(props);
      this.addBook = this.addBook.bind(this);
    }

    
    addBook(){
      let bookName = this.bookName.value;
      let bookAuthor = this.bookAuthor.value;
      let bookYear = +this.bookYear.value;   // Converting from String to a Number

        // Checking if all input fields are filled with value 
      if(bookName && bookAuthor && bookYear){

        // If true => sending all data to store using onAddBook function
        this.props.onAddBook(bookName, bookAuthor, bookYear);

        // Clearing all input fields after pressing the button
        this.bookName.value = '';
        this.bookAuthor.value = '';
        this.bookYear.value = '';  

      } 

      // Checking if bookYear is a Number
      else if( isNaN(bookYear) ) {

        // If it is not a Number => not allowing to send data to store
        alert('Enter number in `Year` field');
      } 

      // If some of fields are not filled with value
      else {
        
        // Not allowing to send data to store
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
              
              <button onClick={this.addBook} className="add-button">Add Book</button>
              <br />
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({onAddBook: addBook}, dispatch);
}

export default connect(null, matchDispatchToProps)(AddBook);