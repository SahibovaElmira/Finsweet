import React from 'react';
import Image from 'next/image';

const Brands = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center sm:gap-4 px-5 sm:px-12 py-8 sm:py-11'>
      <p className='mb-4 sm:mb-0 text-center'> Podcast Available On</p>
      <div className='flex items-center'>
        <Image
          src='/Home/Iconi.png'
          alt='Icon'
          width={25}
          height={12}
        />
        <p className='ml-2'>Apple Podcats</p>
      </div>
      <div className='flex items-center mt-4 sm:mt-0'>
        <Image
          src='/Home/Cloud.png'
          alt='Cloud'
          width={25}
          height={12}
        />
        <p className='ml-2'>Sound Cloud</p>
      </div>
      <div className='flex items-center mt-4 sm:mt-0'>
        <Image
          src='/Home/Lines.png'
          alt='Lines'
          width={25}
          height={12}
        />
        <p className='ml-2'>Google Podcats</p>
      </div>
      <div className='flex items-center mt-4 sm:mt-0'>
        <Image
          src='/Home/Vector.png'
          alt='Vector'
          width={25}
          height={12}
        />
        <p className='ml-2'>Spotify</p>
      </div>
    </div>
  );
};

export default Brands;
