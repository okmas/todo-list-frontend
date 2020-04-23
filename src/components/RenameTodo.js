import React from 'react'
import PropTypes from 'prop-types'

const RenameTodo = ({id, onRenameTodo, onSubmit}) => {
  const onClick = event => {
    event.preventDefault();
    let newText = event.target.newText.value;
    if (newText !== '') {
      onRenameTodo(id, newText);
      onSubmit(id);
    }
  }
  
  return (
    <form style={{display: 'inline'}}
          onSubmit={onClick}>
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
  onRenameTodo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default RenameTodo;
