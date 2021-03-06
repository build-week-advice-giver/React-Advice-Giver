import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import  reducer  from './components/reducers'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

// const logger = (store) => (next) => (action) =>{
//     next(action)
// }

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
)
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();