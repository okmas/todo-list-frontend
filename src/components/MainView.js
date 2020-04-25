import React from 'react'
import PropTypes from 'prop-types'
import ActionBar from './ActionBar'
import StatusBar from './StatusBar'
import TodoList from './TodoList'

function MainView({ todos, filter, toggleTodo, renameTodo, deleteTodo, checkTodo }) {

  const getVisibleTodos = () => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_CHECKED':
        return todos.filter(t => t.completed);
      case 'SHOW_UNCHECKED':
        return todos.filter(t => !t.completed);
      default:
        throw new Error('Unknown filter ' + filter);
    }
  }
  
  const getCompletedTodos = () => {
    return todos.filter(todo => todo.completed);
  }

  const onCheckAllVisible = () => {
    getVisibleTodos().forEach(todo => {if(!todo.completed) checkTodo(todo.id)});
  }

  const onDeleteAllCompleted = () => {
    getCompletedTodos().forEach(todo => deleteTodo(todo.id));
  }

  return (
    <div className='main-view-container'>
      <ActionBar onCheckAllVisible={() => onCheckAllVisible()}
                 onDeleteAllCompleted={() => onDeleteAllCompleted()}
      />
      <StatusBar numVisibleTodos={getVisibleTodos(todos, filter).length}
                 numAllTodos={todos.length}
                 numCompleted={todos.reduce((sum, todo) => (todo.completed) ? ++sum : sum, 0)}
      />
      <TodoList todos={getVisibleTodos(todos, filter)}
                onCheckmarkToggled={toggleTodo}
                onRenameButtonClicked={renameTodo}
                onDeleteButtonClicked={deleteTodo}
      />
    </div>
  )
}

MainView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  renameTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired
}

export default MainView

