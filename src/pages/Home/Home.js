import React, { useState, useEffect } from 'react'
import Header from 'components/Header/Header'
import SearchForm from 'components/SearchForm/SearchForm'
import MoviesList from 'components/MoviesList/MoviesList'
import { featuredMovies } from 'api/index'
import Movie from 'components/Movie/Movie'
import './styles.sass'
import Footer from 'components/Footer/Footer'

const posterUrl = 'https://image.tmdb.org/t/p/original'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [usedSearch, setUsedSearch] = useState(false)
  const [results, setResults] = useState([])

  useEffect(() => {
    const discoverMovies = async () => {
      const data = await featuredMovies()
      setMovies(data)
    }
    discoverMovies()
  }, [])

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
    <>
      <div className='nav-bar container'>
        <Header title='Search Movies' />
        <SearchForm onResults={handleResults} />
      </div>
      <div className='container'>
        <div className='row'>
          {usedSearch
            ? renderResults()
            : movies.map(movie =>
              <div className='col-md-3 col-sm-6 mt-3' key={movie.id}>
                <Movie
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  poster={`${posterUrl}/${movie.poster_path}`}
                />
              </div>
            )}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
