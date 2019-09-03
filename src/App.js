import React, {Component} from 'react';
import './App.scss';

import Books from './components/Books';

class App extends Component{
  render(){
    return (
      <div className="root">
        
        <div className="book-root">
          <h1 className="books-header">Books</h1>
          <Books />
        </div>

      </div>
    )
  }
}

export default App;
