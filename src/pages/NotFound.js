import React from 'react'
import { ButtonBackToHome } from '../components'

export default function () {
  return (
    <div>
      <h1 className='title-error'>404!</h1>
      <h2 className='subtitle'>sorry, the page does not exist</h2>
      <ButtonBackToHome />
    </div>
  )
}
