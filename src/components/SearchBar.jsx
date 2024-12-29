import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <input 
      
      onChange={props.handleSearchMovie} 
      className="form-control mb-4 mt-4 me-2" 
      type="search" 
      placeholder="Search"
      aria-label="Search a Movie">
      </input>
    </div>
  )
}

export default SearchBar