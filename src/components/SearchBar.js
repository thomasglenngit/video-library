import React, { useState } from 'react'
import { InputLabel, Input } from '@material-ui/core'

const SearchBar = ({ onFormSubmit, onBackClick }, ref) => {
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
    <div id="watch" className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <InputLabel children="Video Search: Please enter a topic">
          </InputLabel>
          <Input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            fullWidth
            placeholder="Ex: Sustainable Development"
            color='primary'
          >
          </Input>
        </div>
      </form>

    </div>
  )
}


export default SearchBar