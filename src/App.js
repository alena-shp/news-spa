import React from 'react'
import './App.css'
import Header from './components/header'
import News from './components/news'
import Greeting from './components/greeting'

function App() {
  return (
    <div className="app">
      <Header />
      <Greeting />
      <News />
      Greeting/ News
    </div>
  )
}

export default App
