import React from 'react'
import OurSponsor from '../components/OurSponsor/page'
import Footer from '../components/Footer/page'
import Copyright from '../components/Copyright/page'
import AboutTheHost from '../components/AboutTheHost/page'
import Brands from '../components/brands/page'

const host = () => {
  return (
    <div>
      <AboutTheHost/>
      <Brands/>
       <OurSponsor/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default host
