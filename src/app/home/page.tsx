import React from 'react';
import Brands from '../components/brands/page';
import Header from '../components/Header/page';
import Who from '../components/Who/page';

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <Who />
    </div>
  );
};

export default Home;
