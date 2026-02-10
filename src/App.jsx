import React, {lazy} from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Tech from './sections/Tech'
import ProjectCard from './sections/Works'
import Footer from './sections/Footer'
 const StarsCanvas = lazy(() => import ('./components/canvas/Stars'))

const App = () => {
 
  return (
    <div className="relative z-0 bg-primary">
     

      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        
      </div>

      <div className="relative z-0">
       <Suspense fallback={<div className="text-white text-center">Loading Animation...</div>}>
          <StarsCanvas />
        </Suspense>
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
