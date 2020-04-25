import React from 'react'
import PropTypes from 'prop-types'

function Link({ filter, value, active, onClick }) {
  return (
    <span className={(active ? ' link-active' : 'link-not-active')}>
      <span onClick={() => {console.log('onClick ', filter); onClick(filter)}}>
        {value}
      </span>
    </span>
  )
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

