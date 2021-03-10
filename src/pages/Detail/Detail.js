import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import ButtonBackToHome from 'components/ButtonBackToHome/ButtonBackToHome'

const API_KEY = '31823cb'

export default class extends Component { 
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie : {} }
    _fetchMovie ({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState({ movie })
            })
    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }
    render() {
        const { Title, Poster, Actors,Plot, Genre } = this.state.movie
        return (
        <>
            <Header title='Details Movie'/>
            <div className='details'>
                <ButtonBackToHome />
                <h1 className='details-title'>{Title}</h1>
                <img src={Poster} alt='' />
                <h3 className='details-actors'>Actors: { Actors }</h3>
                <span>Genre: {Genre}</span>
                <p className='details-text'>Plot: {Plot}</p>
            </div>
        </>
        )
    }
}


// import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { ButtonBackToHome } from '../components'

// const API_KEY = '31823cb'

// const Detail = () => {
//   const [movie, setMovie] = useState({})

//   const fetchMovie = ({ id }) => {
//     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
//       .then(res => res.json())
//       .then(movie => {
//         setMovie({ movie })
//       })
//   }

//   useEffect((props) => {
//     const { movieId } = props.match.params
//     fetchMovie({ id: movieId })
//   }, [])

//   const { Title, Poster, Actors, Metascore, Plot } = movie

//   return (
//     <div className='details'>
//       <ButtonBackToHome />
//       <h1 className='details-title'>{Title}</h1>
//       <img src={Poster} alt='' />
//       <h3 className='details-actors'>{Actors}</h3>
//       <span>{Metascore}</span>
//       <p className='details-text'>{Plot}</p>
//     </div>
//   )
// }

// Detail.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.object,
//     isExact: PropTypes.bool,
//     path: PropTypes.string,
//     url: PropTypes.string
//   })
// }

// export default Detail
