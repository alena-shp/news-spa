import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Header from './components/header'
import News from './components/news'
import Greeting from './components/greeting'
import ModalEntry from './components/modalEntry/modalEntry'

function App() {
  return (
    <div className="app">
      
      <Router>
        <Header />
        <Route path="/" component={Greeting} exact />
        <Route path="/news" component={News} />
        <ModalEntry />
      </Router>
    </div>
  )
}

export default App
