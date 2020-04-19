import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodoCompleted: PropTypes.func.isRequired  
  }

  render() {
    var todosAsLIs = [...this.props.todos.map(el => {
      return <TodoItem key={el.id} 
                       todo={el}
                       toggleTodoCompleted={this.props.toggleTodoCompleted}
                       removeTodo={this.props.removeTodo}
             />
    })];

    return (
      <div className='todo-list-container'>
        {todosAsLIs}
      </div>
    )
  }
}
