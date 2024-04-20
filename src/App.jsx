import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Benefits from './components/Benefits'
import Templates from './components/Templates'
import Integration from './components/Integration'
import Features3 from './components/Features3'
import Video from './components/Video'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Templates />
      <Integration />
      <Features3 />
      <Video />
      <Footer />
    </div>
  )
}

export default App