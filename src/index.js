import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import store from './app/store'
import App from './App';

import {addTodo, toggleTodo} from './app/actions'

store.subscribe(() => {
  console.log(store.getState().filter)
  console.table(store.getState().todos);
});

for(let i=0; i<7; ++i) {
  store.dispatch(addTodo(`Todo ${i}`));
}
store.dispatch(toggleTodo(2));
store.dispatch(toggleTodo(3));
store.dispatch(toggleTodo(5));
//store.dispatch(setFilter('SHOW_UNCHECKED'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById('add-todo-input').focus();