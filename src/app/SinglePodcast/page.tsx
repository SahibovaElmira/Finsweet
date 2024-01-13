import React from 'react'
import SinglePodcastHeader from '../components/SinglePodcastHeader/page';
import SinglePodcastMid from '../components/SinglePodcastMid/page';
import TopRow from '../components/TopRow/page';
import Cards from '../components/cards/page';
import OurSponsor from '../components/OurSponsor/page';
import Footer from '../components/Footer/page';
import Copyright from '../components/Copyright/page';
import Ema from '../components/Ema/page';

const SinglePodcast = () => {
  return (
    <div>
      <SinglePodcastHeader/>
      <SinglePodcastMid/>
      <Ema/>
      <TopRow/>
      <Cards/>
      <OurSponsor/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default SinglePodcast;

