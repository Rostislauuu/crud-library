import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import '../App.scss';
import { bindActionCreators } from 'redux';

import {editBook} from '../actions/editBook';
import {updateBook} from '../actions/updateBook';
import {updateLibrary} from '../actions/updateLibrary';
import {closeEditLibrary} from '../actions/closeEditing'
import {deleteBook} from '../actions/deleteBook';
import {hideDetails} from '../actions/hideDetails';

class SelectedBook extends Component {
    constructor(props){
        super(props);
        this.editBook = this.editBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.updateLibrary = this.updateLibrary.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    editBook() {
        // Opening Edit component
        this.props.onEditBook();
    }

    updateBook(){
        let newName = this.newName.value;
        let newAuthor = this.newAuthor.value;
        let newYear = +this.newYear.value;   // Converting from String to a Number
        let id = this.props.selectedBook.id;   
  
          // Checking if all input fields are filled with value + have correct Type
        if(newName && newAuthor && newYear){
  
          // If true => sending all data to store
          this.props.onUpdateBook(id, newName, newAuthor, newYear);
  
          // Clearing all input fields after pressing the button
          this.newName.value = '';
          this.newAuthor.value = '';
          this.newYear.value = '';  
  
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

      updateLibrary(){
          // Checking if we updated selectedBook
          if(this.props.selectedBook.id === this.props.updatedBook.id){

              // Looping through all added books
              // And looking for a book which is selected
                this.props.library.book.map((book) => {
                  if(book.id === this.props.selectedBook.id){

                      // Replacing oldData with a newData
                      book.name = this.props.updatedBook.newName;
                      book.author = this.props.updatedBook.newAuthor;
                      book.year = this.props.updatedBook.newYear;
                      book.id = this.props.updatedBook.id;

                      // Updating store
                      this.props.onUpdateLibrary(book.id, book.name, book.author, book.year);
                    }
            })
          }

          // Closing Edit component
          this.props.onCloseEditLibrary();
      }

      deleteBook(){
        this.props.onDeleteBook(this.props.selectedBook.id);
        this.props.onHideDetails();
      }

    render(){
        if (!this.props.selectedBook){
                return(
                    <div className="loading">
                        Book is not selected...
                    </div>
                )
            } 

        else if(this.props.selectedBook && !this.props.isEditing){
        return(
            <div className="selected-book">
                <p>Name is:</p>
                <h4>{this.props.selectedBook.name}</h4>
                <br />

                <p>Author is:</p>
                <h4>{this.props.selectedBook.author}</h4>
                <br />

                <p>Year of publishing is:</p>
                <h4>{this.props.selectedBook.year}</h4>

                <button className="edit-button" onClick={this.editBook}>Edit</button>
                <br />
                <button className="delete-button" onClick={this.deleteBook}>Delete</button>
            </div>
            )
        } 

        else if(this.props.selectedBook && this.props.isEditing){
            return(
                <div className="selected-book-edit">
                <p>Name is:</p>
                <input type="text" ref={(input) => {this.newName = input}}
                placeholder="Name"  />
                <br />

                <p>Author is:</p>
                <input type="text" ref={(input) => {this.newAuthor = input}} 
                placeholder="Author"/>
                <br />

                <p>Year of publishing is:</p>
                <input type="text" ref={(input) => {this.newYear = input}}
                placeholder="Year" />

                <button className="update-book-button" onClick={this.updateBook}>Update Book</button>
                < br />
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
        onEditBook: editBook,
        onUpdateBook: updateBook,
        onUpdateLibrary: updateLibrary,
        onCloseEditLibrary: closeEditLibrary,
        onDeleteBook: deleteBook,
        onHideDetails: hideDetails
    }, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(SelectedBook);