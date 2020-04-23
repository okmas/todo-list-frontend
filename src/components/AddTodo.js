import React from 'react'
import { addTodo } from '../app/actions' 
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }
  
  return (
    <form onSubmit={onSubmit} className='add-todo-container'>
      <input type='text'
              className='add-todo-textinput'
              placeholder='Add new too...'
              ref={node => {
                input = node
              }}
      />
      <input type='submit'
              value='Submit'
              className='add-todo-button'
      />
    </form>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
