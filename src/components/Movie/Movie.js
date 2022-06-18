import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import './styles.sass'

const Movie = props => {
  const { id, poster, title, rating } = props

  return (
    <>
      <div className='card'>
        <Link className='movie' to={`/movie/${id}`}>
          <img className='img-fluid' src={poster} alt={title} />
        </Link>
      </div>
      <div className='rating-movie'>
        <p>Rated: {rating}</p>
        <ReactStars
          count={rating}
          color='#ffff21'
          size={18}
        />
      </div>
    </>
  )
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number
}

export default Movie
