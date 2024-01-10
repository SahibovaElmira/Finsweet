import React from 'react'
import OurSponsor from '../components/OurSponsor/page'
import Footer from '../components/Footer/page'
import Copyright from '../components/Copyright/page'
import PodcastHeader from '../components/PodcastHeader/page'
import TopRow from '../components/TopRow/page'
import Cards from '../components/cards/page'
import PodCastEnd from '../components/PodcastEnd/page'

const podcats = () => {
  return (
    <div>
      <PodcastHeader/>
      <TopRow/>
      <Cards/>
      <PodCastEnd/>
    <OurSponsor/>
   <Footer/>
   <Copyright/>
 </div>
  )
}

export default podcats

