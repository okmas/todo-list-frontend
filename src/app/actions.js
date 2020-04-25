import axios from 'axios'
import { batchActions } from 'redux-batched-actions'

// SYNCHRONOUS ACTIONS

function addTodo(newTodo) {
  return {
    type: 'ADD_TODO',
    newTodo // In case of AJAX newTodo of type Object, otherwise string
  }
}

function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}

function renameTodo(id, newText) {
  return {
    type: 'RENAME_TODO',
    id,
    newText
  }
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

function checkTodo(id) {
  return {
    type: 'CHECK_TODO',
    id
  }
}

function uncheckTodo(id) {
  return {
    type: 'UNCHECK_TODO',
    id
  }
}

function checkMultipleTodos(ids) {
  return {
    type: 'CHECK_MULTIPLE_TODOS',
    ids
  }
}

function uncheckMultipleTodos(ids) {
  return {
    type: 'UNCHECK_MULTIPLE_TODOS',
    ids
  }
}

function deleteMultipleTodos(ids) {
  return {
    type: 'DELETE_MULTIPLE_TODOS',
    ids
  }
}

function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export {
  addTodo, 
  deleteTodo,
  renameTodo,
  toggleTodo,
  checkTodo,
  uncheckTodo,
  checkMultipleTodos,
  uncheckMultipleTodos,
  deleteMultipleTodos,
  setFilter
};

// ASYNCHRONOUS ACTIONS
const fetchAllTodos_Remote = () => dispatch => 
  axios.get('http://localhost:8080/todos')
    .then(res => dispatch(batchActions(res.data.map(todo => addTodo(todo)))))
    .catch(error => console.log(error));

const fetchAllCompletedTodos_Remote = () => dispatch => 
  axios.get('http://localhost:8080/todos')
    .then(res => console.log('Fetched all completed todos. Not going to do anything with them.', res.data))
    .catch(error => console.log(error));

const addTodo_Remote = (text) => dispatch => 
  axios.post('http://localhost:8080/todos', {'text': text})
    .then(res => dispatch(addTodo(res.data)))
    .catch(error => console.log(error));

const renameTodo_Remote = (id, newText) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}`, {'text': newText})
    .then(() => dispatch(renameTodo(id, newText)))
    .catch(error => console.log(error));

const deleteTodo_Remote = (id) => dispatch => 
  axios.delete(`http://localhost:8080/todos/${id}`)
    .then(() => dispatch(deleteTodo(id)))
    .catch(error => console.log(error));

const toggleTodo_Remote = (id) => (dispatch, getState) => { 
  let completed = false;
  getState().todos.forEach(todo => {if (todo.id === id) completed = todo.completed});
  if (completed) {
    return dispatch(uncheckTodo_Remote(id));
   } else {
    return dispatch(checkTodo_Remote(id));
   }
}

const checkTodo_Remote = (id) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}/complete`)
    .then(() => dispatch(checkTodo(id)))
    .catch(error => console.log(error));

const uncheckTodo_Remote = (id) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}/incomplete`)
    .then(() => dispatch(uncheckTodo(id)))
    .catch(error => console.log(error));

export {
  fetchAllTodos_Remote,
  fetchAllCompletedTodos_Remote,
  addTodo_Remote,
  renameTodo_Remote,
  deleteTodo_Remote,
  toggleTodo_Remote,
  checkTodo_Remote,
  uncheckTodo_Remote
}