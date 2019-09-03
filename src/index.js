import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import About from './components/About';
import reducer from './reducers/index';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    console.log('Added new state', store.getState())
})

ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Route path="/main" component={App} />
                    <Route path="/about" component={About} />
                </Router>
            </Provider>,
     document.getElementById('root'));