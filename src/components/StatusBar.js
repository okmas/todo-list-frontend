import React from 'react'
import PropTypes from 'prop-types'

function StatusBar({ numAllTodos, numCompleted }) {
  let content = (numAllTodos === 0)
    ? `You have no more todos left.`
    : <p>You've completed {numCompleted} out of {numAllTodos} total todos.</p>
    
  return (
    <div id='status-bar'>
      {content}
    </div>
  )
}

StatusBar.propTypes = {
  numAllTodos: PropTypes.number.isRequired,
  numCompleted: PropTypes.number.isRequired
}

export default StatusBar

