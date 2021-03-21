import React, { useEffect, useState } from 'react'
import Header from 'components/Header/Header'
import ButtonBackToHome from 'components/ButtonBackToHome/ButtonBackToHome'
import ReactStars from 'react-rating-stars-component'
import { movieDetail } from 'api/index'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'

const Detail = ({ match }) => {
  const params = match.params
  const [detail, setDetail] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await movieDetail(params.id))
    }
    fetchAPI()
  }, [params.id])

  const { title, backdrop_path, vote_average, Actors, overview, genres, runtime, release_date, homepage } = detail

  return (
    <>
      <Header title='Details Movie' />
      <ButtonBackToHome />
      <div className='container'>
        <div className='row mt-2'>
          <div className='col text-center' style={{ width: '100%' }}>
            <img
              className='img-fluid'
              src={`http://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt={title}
            />
            <div
              className='carousel-caption'
              style={{ textAlign: 'center', fontSize: 35 }}
            >
              {title}
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <p>GENRE</p>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <ul className='list-inline'>{}</ul>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <div className='text-center'>
              <ReactStars
                count={vote_average}
                size={20}
                color='#f4c10f'
              />
            </div>
            <div className='mt-3'>
              <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>OVERVIEW</p>
              {overview}
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-3'>
            <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RELEASE DATE</p>
            <p style={{ color: '#f4c10f' }}>{release_date}</p>
          </div>
          <div className='col-md-3'>
            <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>RUN TIME</p>
            <p style={{ color: '#f4c10f' }}>{runtime} min</p>
          </div>
          <div className='col-md-3'>
            <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>HOMEPAGE</p>
            <a style={{ color: '#f4c10f' }} href={homepage}>{title}</a>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>CASTS</p>
          </div>
        </div>
        <div className='row mt-3'>{Actors}</div>
      </div>
    </>
  )
}

export default Detail
