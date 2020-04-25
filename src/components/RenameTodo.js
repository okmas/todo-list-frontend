import React from 'react'
import PropTypes from 'prop-types'

const RenameTodo = ({ id, destroySelf, onSubmit }) => {
  const onFormSubmitted = event => {
    event.preventDefault();
    let newText = event.target.newText.value;
    if (newText !== '') {
      onSubmit(id, newText);
      destroySelf();
    }
  }
  
  return (
    <form style={{display: 'inline'}}
          onSubmit={onFormSubmitted}>
      <input type='text'
              name='newText'
              placeholder='Add new name...'
      />
      <input type='submit'
              value='R'
      />
    </form>
  )
}

RenameTodo.propTypes = {
  id: PropTypes.number.isRequired, //string
  destroySelf: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RenameTodo;
