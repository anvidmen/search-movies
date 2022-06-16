import React from 'react'
import './styles.sass'

const Header = ({ title }) => (
  <header className='header mb-4'>
    <nav>
      <h1 className='title'>{title}</h1>
    </nav>
  </header>
)

export default Header
