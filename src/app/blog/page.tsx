import React from 'react'
import OurSponsor from '../components/OurSponsor/page'
import Footer from '../components/Footer/page'
import Copyright from '../components/Copyright/page'
import BlogHeader from '../components/BlogHeader/page'
import Subscribe from '../components/subscribe/page'

const blog = () => {
  return (
    <div>
      <BlogHeader/>
       <Subscribe/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default blog
