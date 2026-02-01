import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import StarsCanvas from './components/canvas/Stars'
import Tech from './sections/Tech'
import Works from './sections/Works'
import ProjectCard from './sections/Works'

const App = () => {
  return (
    <div className="div">
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />

        {/* 
      
      projects
      experience
      testimoni
      
      footer */}
      </div>
      <div className="relative z-0">
        {/* <GalaxyCanvas /> */}
        <About />
        <ProjectCard />
        <Tech />

        <Contact />

        <StarsCanvas />

      </div>
      <section className='min-h-screen'></section>
    </div>




  )
}

export default App
