import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/home/Home'
import Navbar from './navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='page'>
      <Navbar />
      <Home id="home" />
    </div>
  </React.StrictMode>,
)
