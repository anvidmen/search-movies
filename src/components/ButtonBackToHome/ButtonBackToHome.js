import React from 'react'
import { Link } from 'react-router-dom'
import './styles.sass'

const ButtonBackToHome = () => (
  <div className='back-to-home'>
    <Link to='/'><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link>
  </div>
)
export default ButtonBackToHome
