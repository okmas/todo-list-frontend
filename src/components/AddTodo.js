import React from 'react'
import { addTodo } from '../app/actions' 
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  var textInput = null;

  const onSubmit = (event) => {
    event.preventDefault();
    if (textInput.value.trim() !== '') {
      dispatch(addTodo(textInput.value));
      textInput.value = '';
      textInput.focus();
    }
  }
  
  return (
    <form onSubmit={onSubmit} className='add-todo-container'>
      <input type='text'
              className='add-todo-textinput'
              placeholder='Add new too...'
              id='add-todo-input'
              ref={el => {textInput = el}}
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
