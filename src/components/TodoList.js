import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggleTodo, onRenameTodo, onDeleteTodo}) => {
  return (
    <div className='todo-list-container'>
      {[...todos.map(todo => {
        return <TodoItem key={todo.id} 
                         {...todo}
                         onToggleTodo={onToggleTodo}
                         onRenameTodo={onRenameTodo}
                         onDeleteTodo={onDeleteTodo}
               />
      })]}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onRenameTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoList
