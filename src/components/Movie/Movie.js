import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const Movie = (props) => {
  const { id, poster, title, rating } = props

  return (
    <Link to={`/movie/${id}`}>
      <div className='card'>
        <img className='img-fluid' src={poster} alt={title} />
      </div>
      <div className='mt-3'>
        <p>Rated: {rating}</p>
        <ReactStars
          count={rating}
          color='#f4c10f'
          size={20}
        />
      </div>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number
}

export default Movie
