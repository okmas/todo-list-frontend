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

export {addTodo, 
        deleteTodo,
        renameTodo,
        toggleTodo,
        checkTodo,
        uncheckTodo,
        checkMultipleTodos,
        uncheckMultipleTodos,
        deleteMultipleTodos,
        setFilter};