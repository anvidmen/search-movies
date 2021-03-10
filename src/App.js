import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Detail, Home, NotFound } from './pages'
import './App.sass'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div className='app'>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  )
}

export default App
