import React from 'react';
import Image from 'next/image';

const OurSponsor = () => {
  return (
    <div className='bg-blue-700 w-1280 h-300 py-8 mr-60 mt-4642 ml-80 flex flex-col items-center justify-center'>
      <div className='flex items-center'>
        <h1 className='text-white font-inter text-2xl font-bold leading-9 tracking-normal text-center mb-3 '>Our sponsor</h1>
      </div>
      <div className=' flex justify-between'>
      <div className='flex items-center ml-3'>
        <Image src="/Home/Vectora.png" alt="1" width={25} height={25} />
        <Image src="/Home/Vectora.png" alt="1" width={31} height={31} />
        <Image src="/Home/Vectora.png" alt="1" width={25} height={25} />
        <p className='text-white text-center ml-3 px-4'>logoipsum</p>
      </div>

      <div className='flex items-center ml-3'>
        <Image src="/Home/square.png" alt="1" width={15} height={15} />
        <Image src="/Home/daire.png" alt="1" width={15} height={15} />
        <p className='text-white text-center ml-3 px-4'>logoipsum</p>
      </div>
      
      <div className='flex items-center ml-3'>
        <Image src="/Home/Vector (2).png" alt="3" width={31} height={31} />
        <p className='text-white text-center ml-3 px-4'>logoipsum</p>
      </div>
      
      <div className='flex items-center ml-3'>
        <Image src="/Home/ham.png" alt="4" width={31} height={31} />
        <p className='text-white text-center ml-3 px-4'>logoipsum</p>
      </div>
    </div>
    </div>
  );
}

export default OurSponsor;


