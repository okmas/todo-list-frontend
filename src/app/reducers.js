function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('Adding todo');
      return [...state, Object.assign({}, {
        id: state.length,
        text: action.text,
        completed: false
      })];
    case 'DELETE_TODO':
      console.log('Deleting todo');
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
      console.log('Toggling todo');
      return state.map(el => {
        if (el.id === action.id) {
          return Object.assign({}, el, {
            completed: !el.completed
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
    if (['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_UNCOMPLITED'].includes(action.filter)) {
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