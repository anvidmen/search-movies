import React from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie/Movie'

const MoviesList = (props) => {
  const { movies } = props
  return (
    <div className='moviesList'>
      {movies.map(movie => {
        return (
          <div key={movie.imdbID} className='moviesList-item'>
            <Movie
              id={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          </div>
        )
      })}
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList
