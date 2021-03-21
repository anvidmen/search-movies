import React, { useState } from 'react'
import { searchMovies } from 'api/index'

const SearchForm = ({ onResults }) => {
  const [searchMovie, setSearchMovie] = useState('')

  const handleChange = (e) => setSearchMovie(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const results = await searchMovies(searchMovie)
    onResults(results)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <input
          className='form-control rounded'
          aria-label='Search'
          aria-describedby='search-addon'
          type='search'
          placeholder='Movie to search...'
          value={searchMovie}
          onChange={handleChange}
        />
        <div className='control'>
          <button className='btn btn-outline-primary'>search</button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
