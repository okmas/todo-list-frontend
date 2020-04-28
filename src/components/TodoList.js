import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({todos, idOfEdit, onCheckmarkToggled, onRenameButtonClicked, 
  onDeleteButtonClicked, onEditButtonClicked}) {
  return (
    <div id='todo-list'>
      {[...todos.map(todo => {
        return <TodoItem key={todo.id} 
                         {...todo}
                         showRenameTodo={idOfEdit === todo.id}
                         onCheckmarkToggled={onCheckmarkToggled}
                         onRenameButtonClicked={onRenameButtonClicked}
                         onDeleteButtonClicked={onDeleteButtonClicked}
                         onEditButtonClicked={onEditButtonClicked}
               />
      })]}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  idOfEdit: PropTypes.string.isRequired,
  onCheckmarkToggled: PropTypes.func.isRequired,
  onRenameButtonClicked: PropTypes.func.isRequired,
  onDeleteButtonClicked: PropTypes.func.isRequired,
  onEditButtonClicked: PropTypes.func.isRequired
}

export default TodoList
