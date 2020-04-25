function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('Adding todo', action.text);
      return [...state, Object.assign({}, {
        id: (state.length === 0) ? 0 : state[state.length-1].id+1,
        text: action.text,
        completed: false
      })];
    case 'DELETE_TODO':
      console.log('Deleting todo', action.id);
      return state.filter(el => action.id !== el.id);
    case 'RENAME_TODO':
      console.log('Renaming todo');
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            text: action.newText
          });
        }
        return el;
      });
    case 'TOGGLE_TODO':
      console.log('Toggling todo', action.id);
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: !el.completed
          });
        }
        return el;
      });
    case 'CHECK_TODO':
      console.log('Checking todo', action.id);
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: true
          });
        }
        return el;
      });
    case 'UNCHECK_TODO':
      console.log('Unchecking todo', action.id);
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: false
          });
        }
        return el;
      });
    case 'CHECK_MULTIPLE_TODOS':
      console.log('Checking multiple todos', action.ids);
      return state.map(el => {
        if (action.ids.includes(el.id)) {
          return Object.assign({}, el, {
            completed: true
          });
        }
        return el;
      });
    case 'UNCHECK_MULTIPLE_TODOS':
      console.log('Unchecking multiple todos', action.ids);
      return state.map(el => {
        if (action.ids.includes(el.id)) {
          return Object.assign({}, el, {
            completed: false
          });
        }
        return el;
      });
    case 'DELETE_MULTIPLE_TODOS':
      console.log('Deleting multiple todos', action.ids);
      return state.filter(el => !action.ids.includes(el.id));
    
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

function todoApp(state = {}, action) {
  console.table(action);
  return {
    todos: todos(state.todos, action),
    filter: filter(state.filter, action)
  }
}

export default todoApp;