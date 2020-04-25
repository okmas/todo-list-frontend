import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({todos, onCheckmarkToggled, onRenameButtonClicked, onDeleteButtonClicked}) => {
  return (
    <div className='todo-list-container'>
      {[...todos.map(todo => {
        return <TodoItem key={todo.id} 
                         {...todo}
                         onCheckmarkToggled={onCheckmarkToggled}
                         onRenameButtonClicked={onRenameButtonClicked}
                         onDeleteButtonClicked={onDeleteButtonClicked}
               />
      })]}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, //string
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onCheckmarkToggled: PropTypes.func.isRequired,
  onRenameButtonClicked: PropTypes.func.isRequired,
  onDeleteButtonClicked: PropTypes.func.isRequired
}

export default TodoList
