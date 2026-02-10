import React, {lazy} from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
const StarsCanvas = lazy(() => import ('./components/canvas/Stars'))
import Tech from './sections/Tech'
import Works from './sections/Works'
import ProjectCard from './sections/Works'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <StarsCanvas />

      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
      </div>

      <div className="relative z-0">
        <About />
        <ProjectCard />
        <Tech />
      
        <Contact />
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
