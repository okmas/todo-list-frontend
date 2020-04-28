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
      className='rename-todo'
      style={{display: 'inline'}} 
      onSubmit={onFormSubmitted}
    >
      <input type='text'
        name='newText'
        placeholder='Add new name...'
      />
      <button className='btn-rename'>
        Submit
      </button>
      <span onClick={() => destroySelf()}> {/* button for closing the dialog */}
        <i className="fas fa-times-circle"></i>
      </span>
    </form>
  )
}

RenameTodo.propTypes = {
  id: PropTypes.number.isRequired, // string in online version
  destroySelf: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RenameTodo;
