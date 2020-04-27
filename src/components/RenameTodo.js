import React from 'react'
import PropTypes from 'prop-types'

function RenameTodo({ id, destroySelf, onSubmit }) {
  const onFormSubmitted = event => {
    event.preventDefault();
    let newText = event.target.newText.value;
    if (newText !== '') {
      onSubmit(id, newText);
      destroySelf();
    }
  }
  
  return (
    <form 
      className='rename-todo-container'
      style={{display: 'inline'}} 
      onSubmit={onFormSubmitted}
    >
      <input type='text'
        name='newText'
        className='rename-textinput'
        placeholder='Add new name...'
      />
      <input type='submit'
        className='btn-rename'
        value='R'
      />
    </form>
  )
}

RenameTodo.propTypes = {
  id: PropTypes.string.isRequired,
  destroySelf: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RenameTodo;
