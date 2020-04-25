import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import store from './app/store'
import App from './App'
import { fetchAllTodos_Remote } from './app/actions'

store.dispatch(fetchAllTodos_Remote());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById('add-todo-input').focus();