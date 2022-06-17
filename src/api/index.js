import axios from 'axios'

const API_KEY = '30e6aed1e4019ef5bb71acbb4edfe86e'
const baseURL = 'https://api.themoviedb.org/3'

export const movieDetail = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/movie/${id}&api_key=${API_KEY}&`, {
      params: {
        api_key: API_KEY,
        language: 'en_US'
      }
    })
    const { data } = response
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const searchMovies = async (searchMovie) => {
  try {
    const response = await axios.get(`${baseURL}/search/movie?api_key=${API_KEY}&query=${searchMovie}`)
    const { data: { results } } = response
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const featuredMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page1`)
    const { data: { results } } = response
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const movieCast = async id => {
  try {
    const { data } = await axios.get(`${baseURL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      }
    });
    const modifiedData = data['cast'].map((c) => ({
      id: c['cast_id'],
      character: c['character'],
      name: c['name'],
      img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
    }))

    return modifiedData;
  } catch (error) {
    throw new Error(error)
  }
}



export const similarMovies = async id => {
  try {
    const { data } = await axios.get(`${baseURL}//movie/${id}/similar`, {
      params: {
        api_key: API_KEY,
        language: 'en_US'
      }
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) {
    throw new Error(error)
  }
}