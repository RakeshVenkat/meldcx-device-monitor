import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import './index.css';
import AppBaseView from './App';


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppBaseView />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
