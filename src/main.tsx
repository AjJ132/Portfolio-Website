import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/home/Home'
import Navbar from './navbar/Navbar'
import About from './sections/About/About'
import SplashScreen from './pages/SplashScreen'
import Projects from './sections/projects/Projects'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='page'>
      <SplashScreen />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
    </div>
  </React.StrictMode>,
)
