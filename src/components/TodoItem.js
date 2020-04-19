import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodoCompleted: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
  }

  render() {
    var containerClass = '';
    var checkboxChecked = '';
    if (this.props.todo.completed) {
      containerClass = ' completed';
      checkboxChecked = 'checked';
    }

    return (
      <div className={'todo-item-container' + containerClass}>
        <label className='checkbox-container'>
          <input type='checkbox' 
                 checked={checkboxChecked} 
                 onChange={this.props.toggleTodoCompleted.bind(this, this.props.todo.id)}
          />
          <span className='checkmark'></span>
        </label>
        <p>{this.props.todo.text}</p>
        <button className='button-delete'
                onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
        >X</button>
      </div>
    )
  }
}
