import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#051139] h-auto'>
    <Hero />
    <About />
    <Pricing />
    <Feedback />
    <Footer />
    </div>
  )
}

export default App