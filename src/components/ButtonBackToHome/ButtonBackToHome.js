import React from 'react'
import { Link } from 'react-router-dom'
import './styles.sass'

const ButtonBackToHome = () => (
  <div className='back-to-home'>
    <Link to='/'>Go back home</Link>
  </div>
)
export default ButtonBackToHome
