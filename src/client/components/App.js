import React from 'react'
import {Route} from 'react-router'

import 'styles/reset.css'
import 'styles/main.css'

import PageIndex from '../pages/PageIndex'

const App = () => (
  <div>
    <Route path="/" component={PageIndex}/>
  </div>
)

export default App
