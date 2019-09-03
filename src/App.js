import React, {Component} from 'react';
import './App.scss';

import Menu from './components/Menu';
import Books from './components/Books';
import Songs from './components/Songs';

class App extends Component{
  render(){
    return (
      <div className="root">
        <div className="menu-root">
          <Menu />
        </div>
        
        <div className="book-root">
          <h1 className="books-header">Books</h1>
          <Books />
        </div>

        <div className="songs-root">
          <h1 className="songs-header">Songs</h1>
          <Songs />
        </div>
      </div>
    )
  }
}

export default App;
