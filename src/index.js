import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'
import { addTodo, checkTodo } from './app/actions'
// import { fetchAllTodos } from './app/actions'

// store.dispatch(fetchAllTodos());

store.dispatch(addTodo('Brush my teeth'));
store.dispatch(addTodo('Read the newspaper'));
store.dispatch(addTodo('Feed the cat'));
store.dispatch(addTodo('Scratch my beard'));
store.dispatch(addTodo('Wonder about the meaning of life'));
store.dispatch(addTodo('Do some actual work'));
store.dispatch(addTodo(`That's enough, now let's just lay back and enjoy a nice evening`));
store.dispatch(addTodo('Go to bed'));
store.dispatch(checkTodo(0));
store.dispatch(checkTodo(2));
store.dispatch(checkTodo(5));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

document.querySelector('#add-todo input[type=text]').focus();