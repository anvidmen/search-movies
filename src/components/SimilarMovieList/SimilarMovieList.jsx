import React from "react"
import { Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"
import './styles.sass'
const SimilarMovieList = ({similarMovies}) => {
    return (
        <div className="row mt-3">
            {
                similarMovies.slice(0, 4).map((item, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                        <div className="card">
                            <Link to={`/movie/${item.id}`}>
                                <img className="img-fluid" src={item.poster} alt={item.title}></img>
                            </Link>
                        </div>
                        <div className="rating">
                            <p>{item.title}</p>
                            <p>Rated: {item.rating.toPrecision(2)}</p>
                            <ReactStars
                                count={item.rating}
                                size={20}
                                color={"#ffff21"}
                            />
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default SimilarMovieList
