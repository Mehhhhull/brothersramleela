import React from 'react'
import Hero from './Components/Hero'
import About from '../About/About'
import AboutSection from './Components/AboutSection'
import Countdown from './Components/Countdown'
import ExploreConnect from './Components/ExploreConnect'
import Convernor from './Components/Convenor'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection/>
      <Convernor/>
      <Countdown/>
      <ExploreConnect/>
    </>
  )
}

export default Home
