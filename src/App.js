import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Detail from 'pages/Detail/Detail'
import NotFound from 'pages/NotFound/NotFound'

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie/:id' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default App
