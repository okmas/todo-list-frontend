import React from 'react'
import PropTypes from 'prop-types'
import FilterContainer from '../containers/FilterContainer'

function ActionBar({ filter, onCheckAllVisible, onDeleteAllCompleted }) {
  return (
    <div className='action-bar-container'>
      <button id='btn-finish-all' onClick={() => onCheckAllVisible()}>Finish All Visible</button>
      <FilterContainer />
      <button id='btn-delete-all' onClick={() => onDeleteAllCompleted()}>Remove All Completed</button>
    </div>
  )
}

ActionBar.propTypes = {
  filter: PropTypes.string.isRequired,
  onCheckAllVisible: PropTypes.func.isRequired,
  onDeleteAllCompleted: PropTypes.func.isRequired
}

export default ActionBar

