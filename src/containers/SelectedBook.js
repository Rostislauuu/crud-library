import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import '../App.scss';
import { bindActionCreators } from 'redux';

import {openEditing} from '../actions/openEditing';
import {updateBook} from '../actions/updateBook';
import {closeEditing} from '../actions/closeEditing'
import {deleteBook} from '../actions/deleteBook';
import {hideDetails} from '../actions/hideDetails';

class SelectedBook extends Component {
    constructor(props){
        super(props);
        this.state = {
          newTitle: '',
          newAuthor: '',
          newYear: ''
        }
    }

    editBook = () => {
        // Opening Edit component
        this.props.onEditBook();
    }

    handleChange = ({target}) => {
      // Changing value for any input
      this.setState({ [target.name]: target.value})
    }

    updateBook = () => {
        const {newTitle, newAuthor} = this.state;
        const newYear = +this.state.newYear;   // Converting from String to a Number
        const id = this.props.selectedBook.id;   
  
          // Checking if all input fields are filled with value + have correct Type
        if(newTitle && newAuthor && newYear){
  
          // If true => sending all data to store
          this.props.onUpdateBook(id, newTitle, newAuthor, newYear);
  
          // Clearing all input fields after pressing the button
          this.setState({
            newTitle: '' ,
            newAuthor: '' ,
            newYear: ''
          })
  
        } 

        // Checking if newYear is Number
        else if( isNaN(newYear) ) {

          // If it is not a Number => not allowing to send data to store
          alert('Enter number in `Year` field');
        } 

        // If some of fields are not filled with value
        else {

            // Not allowing to send data to store
          alert('All fields should be filled');
        }
      }

      updateLibrary = () => {
          // Checking if we updated selectedBook
          if(this.props.selectedBook.id === this.props.updatedBook.id){

              // Looping through all added books
              // And looking for a book which is selected
                this.props.library.book.map((book) => {
                  if(book.id === this.props.selectedBook.id){

                      // Replacing oldData with a newData
                      book.title = this.props.updatedBook.newTitle;
                      book.author = this.props.updatedBook.newAuthor;
                      book.year = this.props.updatedBook.newYear;
                      book.id = this.props.updatedBook.id;
                    }
            })
          }

          // Closing Edit component
          this.props.onCloseEditing();
      }

      deleteBook = () => {
          // Sending id of the book that we want to DELETE to the store
        this.props.onDeleteBook(this.props.selectedBook.id);
        // Not showing details of deleted book(it`s empty already)
        this.props.onHideDetails();
      }

    render(){
        if (!this.props.selectedBook){
                return(
                    <div className="loading">
                        <p>Book is not selected...</p>
                    </div>
                )
            } 

        else if(this.props.selectedBook && !this.props.isEditing){
        return(
            <div className="selected-book">
                <p>Title is:</p>
                <h4>{this.props.selectedBook.title}</h4>
                <br />

                <p>Author is:</p>
                <h4>{this.props.selectedBook.author}</h4>
                <br />

                <p>Year is:</p>
                <h4>{this.props.selectedBook.year}</h4>

                <button className="edit-button" onClick={this.editBook}>Edit</button>
                <button className="delete-button" onClick={this.deleteBook}>Delete</button>
            </div>
            )
        } 

        else if(this.props.selectedBook && this.props.isEditing){
            return(
                <div className="selected-book-edit">
                <p>Title is:</p>
                <input type="text" onChange={this.handleChange} placeholder="Title"
                 value={this.state.newTitle} name="newTitle"  />
                <br />

                <p>Author is:</p>
                <input type="text" onChange={this.handleChange}  placeholder="Author" 
                 value={this.state.newAuthor} name="newAuthor"/>
                <br />

                <p>Year is:</p>
                <input type="text" onChange={this.handleChange} placeholder="Year"
                 value={this.state.newYear} name="newYear" />

                <button className="update-book-button" onClick={this.updateBook}>Update Book</button>
                <button className="update-library-button" onClick={this.updateLibrary}>Update Library</button>
            </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return{
        library: state.books,
        selectedBook: state.selectedBook,
        updatedBook: state.updatedBook,
        isEditing: state.editBook.isEditing
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onEditBook: openEditing,
        onUpdateBook: updateBook,
        onCloseEditing: closeEditing,
        onDeleteBook: deleteBook,
        onHideDetails: hideDetails
    }, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(SelectedBook);