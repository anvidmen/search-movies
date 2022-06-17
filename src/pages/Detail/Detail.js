import React, { useEffect, useState } from 'react'
import Header from 'components/Header/Header'
import ButtonBackToHome from 'components/ButtonBackToHome/ButtonBackToHome'
import ReactStars from 'react-rating-stars-component'
import { movieDetail, movieCast } from 'api/index'
import CastList from 'components/CastList/CastList'
import './styles.sass'
import Footer from 'components/Footer/Footer'

const Detail = ({ match }) => {
  const params = match.params
  const [detail, setDetail] = useState([])
  const [cast, setCast] = useState([]);

  const { title, backdrop_path, vote_average, overview, genres, runtime, release_date, homepage } = detail

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await movieDetail(params.id))
      setCast(await movieCast(params.id))
    }
    fetchAPI()
  }, [params.id])

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className='container'>
        <Header title='Details Movie' />
        <ButtonBackToHome />
      </div>
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
        <div className='row mt-4'>
          <div className='col'>
            <p className='details'>GENRE</p>
          </div>
        </div>
        <div className='row mt-1'>
          <div className='col'>
            <ul className='list-inline'>{genresList}</ul>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <div className='text-center'>
              <ReactStars
                count={vote_average}
                size={20}
                color='#ffff21'
              />
            </div>
            <div className='mt-3'>
              <p className='details'>OVERVIEW</p>
              <p style={{ color: '#dbdbdb' }}>{overview}</p>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-3'>
            <p className='details'>RELEASE DATE</p>
            <p style={{ color: '#ffff21' }}>{release_date}</p>
          </div>
          <div className='col-md-3'>
            <p className='details'>RUN TIME</p>
            <p style={{ color: '#ffff21' }}>{runtime} min</p>
          </div>
          <div className='col-md-5'>
            <p className='details'>HOMEPAGE</p>
            <a style={{ color: '#ffff21' }} href={homepage} target="_blank" rel="noopener noreferrer">{title}</a>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <p className='details'>CASTS</p>
          </div>
        </div>
        <CastList cast={cast} />
      </div>
      <Footer />
    </>
  )
}

export default Detail
