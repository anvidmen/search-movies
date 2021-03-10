import React, { useState } from 'react'
const API_KEY = '31823cb'

const SearchForm = ({ onResults }) => {
  const [inputMovie, setInputMovie] = useState('')

  const handleChange = (e) => {
    setInputMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = '0' } = results
        console.log({ Search, totalResults })
        onResults(Search)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='field has-addons'>
        <div className='control'>
          <input
            className='input'
            onChange={handleChange}
            type='text'
            placeholder='Movie to search...'
          />
        </div>
        <div className='control'>
          <button className='button is-info'>Search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
