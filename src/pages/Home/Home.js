import React, { useState } from 'react'
import Header from 'components/Header/Header'
import SearchForm from 'components/SearchForm/SearchForm'
import MoviesList from 'components/MoviesList/MoviesList'

const Home = () => {
  const [usedSearch, setUsedSearch] = useState(false)
  const [results, setResults] = useState([])

  const handleResults = (results) => {
    setResults(results)
    setUsedSearch(true)
  }

  const renderResults = () => {
    return results.length === 0
      ? <p>Sorry! results not found!</p>
      : <MoviesList movies={results} />
  }

  return (
    <div>
      <Header title='Search Movies' />
      <div className='searchForm-wrapper'>
        <SearchForm onResults={handleResults} />
      </div>
      {usedSearch
        ? renderResults()
        : <small>Use the form to search a movie</small>}
    </div>
  )
}

export default Home
