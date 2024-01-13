import React from 'react'
import Image from 'next/image'
import SingleBlogHeader from '../components/SingleBlogHeader/page'
import Articles from '../components/ArticlesAndNews/page'
import Subscribe from '../components/subscribe/page'
import Footer from '../components/Footer/page'
import Copyright from '../components/Copyright/page'


const SingleBlog = () => {
  return (
    <div>
   <SingleBlogHeader/>
   <Articles/>
   <Subscribe/>
   <Footer/>
   <Copyright/>

    </div>
  )
}

export default SingleBlog
