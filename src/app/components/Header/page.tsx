import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='stick pt-14 mx-auto grid grid-cols-1 sm:grid-cols-2'>
      <div className='sm:order-2 sm:pr-8'>
        <Image
          className='flex py-14 pl-12 px-12 top-0'
          src='/Home/Audio track.png'
          width={432}
          height={256}
          alt='Audio track'
        />
      </div>
      <div className='sm:order-1 sm:w-full'>
        <p className='backdrop:w-full sm:backdrop:w-440 h-50 sm:h-auto sm:top-20 right-0 sm:right-8 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>
          Become The Hero<br /> Of Your Own Story
        </p>
        <p className='w-full sm:w-466 h-84 top-40 sm:top-0 right-0 sm:right-8 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          <br />sed diam nonumy eirmod tempor invidunt ut labore
          <br /> et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
};

export default Header;
