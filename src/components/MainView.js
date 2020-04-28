import React from 'react'
import PropTypes from 'prop-types'
import ActionBar from './ActionBar'
import StatusBar from './StatusBar'
import TodoList from './TodoList'

function MainView({ todos, filter, idOfEdit, toggleTodo, renameTodo, deleteTodo, 
  checkTodo, uncheckTodo, toggleEditField}) {

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

  const onUncheckAllVisible = () => {
    getVisibleTodos().forEach(todo => {if(todo.completed) uncheckTodo(todo.id)});
  }

  const onDeleteAllCompleted = () => {
    getCompletedTodos().forEach(todo => deleteTodo(todo.id));
  }

  const shouldCheckAll = () => {
    return !getVisibleTodos().reduce(
      (prev, curr) => prev && curr.completed,
      true
    );
  }

  return (
    <div id='main-view'>
      <ActionBar onCheckAllVisible={() => onCheckAllVisible()}
                 onUncheckAllVisible={() => onUncheckAllVisible()}
                 onDeleteAllCompleted={() => onDeleteAllCompleted()}
                 shouldCheckAll={shouldCheckAll()} // allows to toggle functionality between 'Check All' and 'Uncheck All'
      />
      <TodoList todos={getVisibleTodos(todos, filter)}
                idOfEdit={idOfEdit} // ID of todo, which is showing a RenameTodo dialog – only one can be shown
                onCheckmarkToggled={toggleTodo}
                onRenameButtonClicked={renameTodo}
                onDeleteButtonClicked={deleteTodo}
                onEditButtonClicked={toggleEditField}
      />
      <StatusBar numAllTodos={todos.length}
                 numCompleted={todos.reduce((sum, todo) => (todo.completed) ? ++sum : sum, 0)}
      />
    </div>
  )
}

MainView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, //string in online version
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  idOfEdit: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  renameTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
  uncheckTodo: PropTypes.func.isRequired,
  toggleEditField: PropTypes.func.isRequired
}

export default MainView

