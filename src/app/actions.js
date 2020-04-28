import axios from 'axios'
import { batchActions } from 'redux-batched-actions'

// SYNCHRONOUS ACTION CREATORS

function addTodo_Sync(newTodo) {
  return {
    type: 'ADD_TODO',
    newTodo // In case of AJAX newTodo of type Object, otherwise string
  }
}

function deleteTodo_Sync(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}

function renameTodo_Sync(id, newText) {
  return {
    type: 'RENAME_TODO',
    id,
    newText
  }
}

function toggleTodo_Sync(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

function checkTodo_Sync(id) {
  return {
    type: 'CHECK_TODO',
    id
  }
}

function uncheckTodo_Sync(id) {
  return {
    type: 'UNCHECK_TODO',
    id
  }
}

function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter
  }
}

function toggleEditField(id) {
  return {
    type: 'TOGGLE_EDIT_FIELD',
    id
  }
}

export {
  addTodo_Sync, 
  deleteTodo_Sync,
  renameTodo_Sync,
  toggleTodo_Sync,
  checkTodo_Sync,
  uncheckTodo_Sync,
  setFilter, 
  toggleEditField
};

// ASYNCHRONOUS ACTION CREATORS

const fetchAllTodos = () => dispatch => 
  axios.get('http://localhost:8080/todos')
    .then(res => dispatch(batchActions(res.data.map(todo => addTodo_Sync(todo)))))
    .catch(error => console.log(error));

const fetchAllCompletedTodos = () => dispatch => 
  axios.get('http://localhost:8080/todos')
    .then(res => console.log('Fetched all completed todos. Not going to do anything with them.', res.data))
    .catch(error => console.log(error));

const addTodo = (text) => dispatch => 
  axios.post('http://localhost:8080/todos', {'text': text})
    .then(res => dispatch(addTodo_Sync(res.data)))
    .catch(error => console.log(error));

const renameTodo = (id, newText) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}`, {'text': newText})
    .then(() => dispatch(renameTodo_Sync(id, newText)))
    .catch(error => console.log(error));

const deleteTodo = (id) => dispatch => 
  axios.delete(`http://localhost:8080/todos/${id}`)
    .then(() => dispatch(deleteTodo_Sync(id)))
    .catch(error => console.log(error));

const toggleTodo = (id) => (dispatch, getState) => { 
  let completed = false;
  getState().todos.forEach(todo => {if (todo.id === id) completed = todo.completed});
  if (completed) {
    return dispatch(uncheckTodo(id));
   } else {
    return dispatch(checkTodo(id));
   }
}

const checkTodo = (id) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}/complete`)
    .then(() => dispatch(checkTodo_Sync(id)))
    .catch(error => console.log(error));

const uncheckTodo = (id) => dispatch => 
  axios.post(`http://localhost:8080/todos/${id}/incomplete`)
    .then(() => dispatch(uncheckTodo_Sync(id)))
    .catch(error => console.log(error));


// "ASYNCHRONOUS" ACTION CREATORS FOR THE OFFLINE VERSION

// const fetchAllTodos = () => {};
// const fetchAllCompletedTodos = () => {};
// const addTodo = addTodo_Sync;
// const renameTodo = renameTodo_Sync;
// const deleteTodo = deleteTodo_Sync;
// const toggleTodo = toggleTodo_Sync;
// const checkTodo = checkTodo_Sync;
// const uncheckTodo = uncheckTodo_Sync;

export {
  fetchAllTodos,
  fetchAllCompletedTodos,
  addTodo,
  renameTodo,
  deleteTodo,
  toggleTodo,
  checkTodo,
  uncheckTodo
}