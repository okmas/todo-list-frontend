import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Online version
      // return [...state, Object.assign({}, {
      //   id: action.newTodo.id,
      //   text: action.newTodo.text,
      //   completed: action.newTodo.completed
      // })];
      // Offline version
      return [...state, Object.assign({}, {
        id: (state.length > 0) ? state[state.length-1].id + 1 : 0,
        text: action.newTodo,
        completed: false
      })];
    case 'DELETE_TODO':
      return state.filter(el => action.id !== el.id);
    case 'RENAME_TODO':
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            text: action.newText
          });
        }
        return el;
      });
    case 'TOGGLE_TODO':
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: !el.completed
          });
        }
        return el;
      });
    case 'CHECK_TODO':
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: true
          });
        }
        return el;
      });
    case 'UNCHECK_TODO':
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: false
          });
        }
        return el;
      });
    
    default:
      return state;
  }
}

function filter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_FILTER') {
    if (['SHOW_ALL', 'SHOW_CHECKED', 'SHOW_UNCHECKED'].includes(action.filter)) {
      return action.filter;
    }
  }
  return state;
}

function idOfEdit(state = "", action) {
  if (action.type === 'TOGGLE_EDIT_FIELD') {
    if (state === action.id) {
      return "";
    }
    return action.id;
  }
  return state;
}

const todoApp = combineReducers({
  todos,
  filter,
  idOfEdit
})

export default todoApp;