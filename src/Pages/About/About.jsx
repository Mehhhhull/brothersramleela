import React from 'react'
import AboutUsPage from './Components/AboutUsPage'

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10"></div>
      </div>
      <div className="relative z-10">
        <AboutUsPage/>
      </div>
    </div>
  )
}

export default About
