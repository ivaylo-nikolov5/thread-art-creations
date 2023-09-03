import React from 'react'

const SortCriteria = ({ onSortChange }) => {

  const handleSortSelect = (event) => {
    const selectedSort = event.target.value;
    console.log(selectedSort);
    onSortChange(selectedSort);
  };

  return (
    <select className='sort-criteria-list' onChange={handleSortSelect}>
        <option value={"def"} className='sort-criteria'>Default</option>
        <option value={"nameA"} className='sort-criteria'>Name (A - Z)</option>
        <option value={"nameZ"} className='sort-criteria'>Name (Z - A)</option>
        <option value={"priceI"} className='sort-criteria'>Price (Inc.)</option>
        <option value={"priceD"} className='sort-criteria'>Price (Dec.)</option>
        {/* <option value={"ratingI"} className='sort-criteria'>Rating (Inc.)</option>
        <option value={"ratingD"} className='sort-criteria'>Rating (Dec.)</option> */}
    </select>
  )
}

export default SortCriteria
