import React from 'react'
import PropTypes from 'prop-types'

function StatusBar({ numVisibleTodos, numAllTodos, numCompleted }) {
  return (
    <div className='status-bar-container'>
      <p>You've completed {numCompleted} out of {numAllTodos} total todos.</p>
      <p>Currently showing {numVisibleTodos} todos.</p>
    </div>
  )
}

StatusBar.propTypes = {
  numVisibleTodos: PropTypes.number.isRequired,
  numAllTodos: PropTypes.number.isRequired,
  numCompleted: PropTypes.number.isRequired
}

export default StatusBar

