import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/home/Home'
import Navbar from './navbar/Navbar'
import About from './sections/About/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='page'>
      <Navbar />
      <About id="about" />
      <Home id="home" />
    </div>
  </React.StrictMode>,
)
