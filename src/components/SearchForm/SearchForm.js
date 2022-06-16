import React, { useState } from 'react'
import { searchMovies } from 'api/index'
import './styles.sass'

const SearchForm = ({ onResults }) => {
  const [searchMovie, setSearchMovie] = useState('')

  const handleChange = (e) => setSearchMovie(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const results = await searchMovies(searchMovie)
      onResults(results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <input
        className='input-search form-control'
        aria-label='Search'
        aria-describedby='search-addon'
        type='search'
        placeholder='Movie to search...'
        value={searchMovie}
        onChange={handleChange}
      />
      <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>search</button>
    </form>
  )
}

export default SearchForm
