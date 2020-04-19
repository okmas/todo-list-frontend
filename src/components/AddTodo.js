import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  static propTypes = {
    addNewTodo: PropTypes.func.isRequired    
  }

  state = {
    text: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== '') {
      this.props.addNewTodo(this.state.text);
      this.setState({ text: '' });
    }
  }

  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='add-todo-container'>
        <input type='text'
                name='newTodoText'
                onChange={this.onChange}
                value={this.state.text}
                className='add-todo-textinput'
        />
        <input type='submit'
                value='Add new todo'
                className='add-todo-button'
        />
      </form>
    )
  }
}
