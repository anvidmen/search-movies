import React from 'react'
import PropTypes from 'prop-types'
import Movie from 'components/Movie/Movie'

const posterUrl = 'https://image.tmdb.org/t/p/original/'

const MoviesList = (props) => {
  const { movies } = props
  return (
    <div className='row mt-3'>
      {movies.map(movie =>
        <div className='col-md-3 col-sm-6' key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={posterUrl + movie.poster_path}
          />
        </div>
      )}
    </div>
  )
}

MoviesList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  rating: PropTypes.string,
  poster: PropTypes.string
}

export default MoviesList
