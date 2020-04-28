import React from 'react'
import PropTypes from 'prop-types'
import FilterContainer from '../containers/FilterContainer'

function ActionBar({ onCheckAllVisible, onUncheckAllVisible, onDeleteAllCompleted, shouldCheckAll }) {
  return (
    <div id='action-bar'>
      <button 
        id='btn-toggle-all' 
        onClick={() => (shouldCheckAll) ? onCheckAllVisible() : onUncheckAllVisible()}>
        {(shouldCheckAll) ? 'Check All Visible' : 'Uncheck All Visible' }
      </button>
      <FilterContainer />
      <button 
        id='btn-remove-completed' 
        onClick={() => onDeleteAllCompleted()}>
        Remove All Completed
      </button>
    </div>
  )
}

ActionBar.propTypes = {
  onCheckAllVisible: PropTypes.func.isRequired,
  onUncheckAllVisible: PropTypes.func.isRequired,
  onDeleteAllCompleted: PropTypes.func.isRequired,
  shouldCheckAll: PropTypes.bool.isRequired
}

export default ActionBar

