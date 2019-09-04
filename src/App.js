import React, {Component} from 'react';
import './App.scss';

import Books from './components/Books';

class App extends Component{
  render(){
    return (
      <div className="page">
        
        <div className="book-root">
          <Books />
        </div>

      </div>
    )
  }
}

export default App;
