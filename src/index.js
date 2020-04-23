import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore } from 'redux'
import './css/index.css';
import store from './app/store'
import App from './App';

import {addTodo, toggleTodo} from './app/actions'

store.subscribe(() => {
  console.log(store.getState().filter)
  console.table(store.getState().todos);
});

  store.dispatch(addTodo('One'));
  store.dispatch(addTodo('Two'));
  store.dispatch(addTodo('Ďeveť'));
  store.dispatch(toggleTodo(2));
  store.dispatch(addTodo('Päť'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);