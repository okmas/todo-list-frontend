import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

function Filter({ filter, setFilter }) {
  const linkProps = [
    {filter:'SHOW_ALL', value: 'All'}, 
    {filter:'SHOW_UNCHECKED', value: 'Unfinished'},
    {filter:'SHOW_CHECKED', value: 'Completed'}
  ]
  
  let links = [];
  for (let i = 0; i < linkProps.length; ++i) {
    links = [...links, 
      <span key={linkProps[i].filter}>
        <Link filter={linkProps[i].filter}
              value={linkProps[i].value}
              active={linkProps[i].filter === filter}
              onClick={(linkProps[i].filter !== filter) ? setFilter : (() => {})}
        />
        <span>{(i === linkProps.length - 1) ? '' : '|'}</span>
      </span>]
  }

  return (
    <span className='filter-container'>
      {links}
    </span>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Filter

