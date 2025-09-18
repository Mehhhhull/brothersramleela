import React from 'react'
import Hero from './Components/Hero'
import About from '../About/About'
import AboutSection from './Components/AboutSection'
import Countdown from './Components/Countdown'
import ExploreConnect from './Components/ExploreConnect'
import Convernor from './Components/Convenor'

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10"></div>
      </div>
      <div className="relative z-10">
        <Hero />
        <AboutSection/>
        <Convernor/>
        <Countdown/>
        <ExploreConnect/>
      </div>
    </div>
  )
}

export default Home
