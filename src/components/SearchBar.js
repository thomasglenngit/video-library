import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')



  // const onInputChange = (event) => {// move this longer functionality to an inline function(29)
  //   setTerm(event.target.value)
  // }

  const onSubmit = (event) => {
    event.preventDefault()
    
    onFormSubmit(term)

    //TODO: Make sure we call callback from parent
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search:</label>
          <input
            type="text"
            value={term}
            // onChange={onInputChange} 
            onChange={(event) => setTerm(event.target.value)}
            />
        </div>
      </form>
    </div>
  )
}


export default SearchBar