import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {addBook} from '../actions/addBook';

class AddBook extends Component{
    constructor(props){
      super(props);
      this.state = {
        bookName: '' ,
        bookAuthor: '' , 
        bookYear: ''
      }
    }

    handleChange = ({target}) => {
      this.setState({ [target.name]: target.value})
    }
    
    addBook = () => {
      const {bookName, bookAuthor} = this.state;
      const bookYear = +this.state.bookYear; // Converting from String to a Number 

        // Checking if all input fields are filled with value 
      if(bookName && bookAuthor && bookYear){

        // If true => sending all data to store using onAddBook function
        this.props.onAddBook(bookName, bookAuthor, bookYear);
        
        // Clearing all input fields after pressing the button
        this.setState({
          bookName: '' ,
          bookAuthor: '' ,
          bookYear: ''
        })
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
            <div className="add-book">
              <input type="text" onChange={this.handleChange} placeholder="Name"
                value={this.state.bookName} name="bookName" className="input-field" />
                <br />
              
              <input type="text" onChange={this.handleChange} placeholder="Author"
                value={this.state.bookAuthor} name="bookAuthor" className="input-field" />
                <br />

              <input type="text" onChange={this.handleChange} placeholder="Year"
                value={this.state.bookYear} name="bookYear" className="input-field" />
              <br />
              
              <button onClick={this.addBook} className="add-button">Add Book</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({onAddBook: addBook}, dispatch);
}

export default connect(null, matchDispatchToProps)(AddBook);