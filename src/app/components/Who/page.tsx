import React from 'react';
import Image from 'next/image';

const Who = () => {
  return (
    <div className='stick pt-14 mx-auto grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <p className='backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>
          A podcast for makers and <br /> entrepreneurs
        </p>
        <p className='w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3'>
          Apparently we had reached a great<br/> height in the atmosphere, for the sky<br/> was a dead black, and the stars had <br/>ceased to twinkle.
        </p>
      </div>

      <div className='sm:order-2 sm:pr-8'>
        <Image
          className='flex py-14 pl-12 px-12 top-0'
          src='/Home/Right.png'
          width={740}
          height={512}
          alt='Right'
        />
      </div>
    </div>
  );
};

export default Who;
