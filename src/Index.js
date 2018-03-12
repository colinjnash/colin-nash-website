import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import registerServiceWorker from './registerserviceworker';
import Root from './components/Root';



const store = createStore(rootReducer);


render(
  <Root store={store} />,
  document.querySelector('#container')
);


registerServiceWorker();
// Only for HTTPS connections. Will work around.