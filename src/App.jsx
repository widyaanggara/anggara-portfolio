import React from 'react'
import './index.css'
import Nav from './components/nav/Nav'
import Home from './components/hero/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'

const App = () => {
  return (
    <>
      <Nav />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
}

export default App