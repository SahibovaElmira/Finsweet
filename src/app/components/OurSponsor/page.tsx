import React from 'react';
import Image from 'next/image';

const OurSponsor = () => {
  return (
    <div  style={{
      position:'relative',
      bottom:-40
    }} className='bg-blue-700  w-full md:w-3/4 lg:w-1280 h-300 mb-{-10} mr-30 py-4 mx-auto md:mr-0 mt-4642 md:ml-40 flex flex-col items-center justify-center'>
      <div className='flex items-center mb-8'>
        <h1 className='text-white font-inter text-2xl font-bold leading-9 tracking-normal text-center'>Our sponsor</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex items-center mb-3 md:mb-0'>
          <Image src="/Home/Vectora.png" alt="1" width={25} height={25} />
          <Image src="/Home/Vectora.png" alt="1" width={31} height={31} />
          <Image src="/Home/Vectora.png" alt="1" width={25} height={25} />
          <p className='text-white text-center ml-3 md:ml-0 md:px-4'>logoipsum</p>
        </div>

        <div className='flex items-center mb-3 md:mb-0'>
          <Image src="/Home/square.png" alt="1" width={15} height={15} />
          <Image src="/Home/daire.png" alt="1" width={15} height={15} />
          <p className='text-white text-center ml-3 md:ml-0 md:px-4'>logoipsum</p>
        </div>

        <div className='flex items-center mb-3 md:mb-0'>
          <Image src="/Home/Vector (2).png" alt="3" width={31} height={31} />
          <p className='text-white text-center ml-3 md:ml-0 md:px-4'>logoipsum</p>
        </div>

        <div className='flex items-center'>
          <Image src="/Home/ham.png" alt="4" width={31} height={31} />
          <p className='text-white text-center ml-3 md:ml-0 md:px-4'>logoipsum</p>
        </div>
        <div className='flex items-center'>
          <Image src="/Home/Vector (1).png" alt="4" width={31} height={31} />
          <p className='text-white text-center ml-3 md:ml-0 md:px-4'>logoipsum</p>
        </div>
      </div>
    </div>
  );
}

export default OurSponsor;
