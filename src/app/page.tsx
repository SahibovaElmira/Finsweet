import React from 'react';
import Brands from './components/brands/page';
import Header from './components/Header/page';
import Who from './components/Who/page';
import My_origins from './components/my_origins/page';
import Cards from './components/cards/page';
import TopRow from './components/TopRow/page';
import TestimonialCards from './components/TestimonialCards/page';


const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <Who />
      <My_origins/>
      <TopRow/>
      <Cards/>
      <TestimonialCards/>
     
    </div>
  );
};

export default Home;
