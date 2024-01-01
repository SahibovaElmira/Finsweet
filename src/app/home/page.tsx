import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='relative'>
    <div>
      <p className='absolute backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-0 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-5 mb-3 sm:mb-0 backdrop:py-3'>Become The Hero<br/> Of Your Own Story</p>
      <p className="absolute w-full sm:w-466 h-84 top-40 left-0 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
      <br/>sed diam nonumy eirmod tempor invidunt ut labore<br/> et dolore magna aliquyam erat.</p>
    </div>
    <div className="flex  justify-end">
    
      <Image
      className="w-full sm:w-[432px] h-[256px] sm:h-[256px] py-7 top-[20]"
      src="/Home/Audio track.png"
      width={432}
      height={256}
      alt="Audio track"
    />

      </div>
    </div>
  );
};

export default Home;
