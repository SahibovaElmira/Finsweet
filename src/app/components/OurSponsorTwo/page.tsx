import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurSponsorTwo = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
      className=' w-full md:w-3/4 lg:w-1280 h-300 mb-{-10} mr-30 py-4 mx-auto md:mr-0 mt-4642 md:ml-40 flex flex-col items-center justify-center'>
      <div className='flex items-center mb-8'>
        <h1 className='font-inter text-2xl font-bold leading-9 tracking-normal text-center text-blue-800'>Sponsorlar</h1>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
        <SponsorCard image='/Home/Vectora.png' link='https://www.google.com' text='ES_professional' />
        <SponsorCard image='/Home/square.png' link='https://www.google.com' text='ES_biznes' />
        <SponsorCard image='/Home/Vector (2).png' link='https://www.google.com' text='ES_official' />
        <SponsorCard image='/Home/ham.png' link='https://www.google.com' text='ES_MMC' />
        <SponsorCard image='/Home/Vector (1).png' link='https://www.google.com' text='ES_MT' />
        <SponsorCard image='/Home/square.png' link='https://www.google.com' text='Sponsor ol!' />
        
      </div>
    </div>
  );
};

const SponsorCard = ({ image, link, text }) => (
  <div className='bg-gray-500 flex items-center mb-3 md:mb-0'>
    <Image src={image} alt='sponsor' width={31} height={31} />
    <Link href={link}>
      <p className='text-white text-center ml-3 md:ml-0 md:px-4'>{text}</p>
    </Link>
  </div>
);

export default OurSponsorTwo;


