import React from 'react'

const SortCriteria = () => {
  return (
    <select className='sort-criteria-list'>
        <option className='sort-criteria'>Default</option>
        <option className='sort-criteria'>Name (A - Z)</option>
        <option className='sort-criteria'>Name (Z - A)</option>
        <option className='sort-criteria'>Price (Inc.)</option>
        <option className='sort-criteria'>Price (Dec.)</option>
        <option className='sort-criteria'>Rating (Inc.)</option>
        <option className='sort-criteria'>Rating (Dec.)</option>
    </select>
  )
}

export default SortCriteria
