import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import store from './app/store'
import App from './App'
import { fetchAllTodos } from './app/actions'

store.dispatch(fetchAllTodos());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById('add-todo-textinput').focus();