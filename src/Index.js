import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contentReducer from './reducers/contentReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';



const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#container'));