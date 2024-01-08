import React from 'react'
import OurSponsor from '../components/OurSponsor/page'
import Footer from '../components/Footer/page'
import Copyright from '../components/Copyright/page'
import AboutTheHost from '../components/AboutTheHost/page'
import Brands from '../components/brands/page'
import DreamSection from '../components/DreamSection/page'
import Journey from '../components/Journey/page'

const host = () => {
  return (
    <div>
      <AboutTheHost/>
      <Brands/>
      <DreamSection/>
      <Journey/>
       <OurSponsor/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default host
