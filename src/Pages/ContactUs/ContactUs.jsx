import React from 'react'
import DonationsSection from './Components/DonationsSection'
import SponsorsSection from './Components/SponsorsSection'
import Contact from './Components/Contact'


const ContactUs = () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/assets/mandala.png')] bg-repeat opacity-10"></div>
      </div>
      <div className="relative z-10">
        <DonationsSection />
        <SponsorsSection />
        <Contact />
      </div>
    </div>
  )
}

export default ContactUs
