// Action creators
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
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

function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export {addTodo, 
        deleteTodo,
        renameTodo,
        toggleTodo,
        setFilter};