import React from 'react'
import './styles.sass'

const Footer = () => {
    return (
        <div className='container divider'>
            <div className="row mt-3 mb-5">
                <div className="col-md-8 col-sm-6 text">
                    <h3>ABOUT ME</h3>
                    <p>
                        It's a demo dedicated to searching for movies,
                        with a section where you can find all the details of the movie
                        such as genre, rating, overview, cast, similar movies, short film, etc.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a
                                href="https://www.linkedin.com/in/juan-om/"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='social-networks'
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="https://github.com/anvidmen"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='social-networks'
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="https://twitter.com/JuanDaOm"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='social-networks'
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 text">
                    <h3>KEEP IN TOUCH</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt social-networks"></i> 
                                </strong>
                                Barcelona, Catalonia, Spain
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-phone-square-alt social-networks"></i>
                                </strong>
                                +01 00 00 00
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-envelope social-networks"></i> 
                                </strong>
                                anvidmen@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
