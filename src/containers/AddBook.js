import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

import {addBook} from '../actions/addBook';

class AddBook extends Component{
    addBook(){
        console.log('Added book, ' , this.bookInput.value);
        this.props.onAddBook(this.bookInput.value);
        this.bookInput.value = '';
      }

    render(){
        return(
            <div>
              <input type="text" ref={(input) => {this.bookInput = input}} className="input-field" />
              <button onClick={this.addBook.bind(this)} className="add-button">Add Book</button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({onAddBook: addBook}, dispatch);
}

export default connect(null, matchDispatchToProps)(AddBook);