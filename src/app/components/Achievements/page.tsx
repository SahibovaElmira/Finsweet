import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Achievements = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4'>
      <div className='bg-blue-700 w-308 h-64 py-4  px-6 relative flex flex-col items-center justify-center'>
        <Image src='/host/host3.png' alt='host3' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-white'href="https://www.youtube.com">500+ <br/> Podkastlar
      </Link>
      </div>
      <div className='bg-blue-700 w-308 h-464 py-4  px-6 relative flex flex-col items-center justify-center mt-8'>
        <Image src='/host/host4.png' alt='host4' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-white'href="https://www.youtube.com">24M<br/> Baxış
      </Link>
      </div>
      <div className='bg-blue-700 w-308 h-464 py-4  px-6 relative flex flex-col items-center justify-center'>
        <Image src='/host/host5.png' alt='host5' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-white'href="https://www.youtube.com">600K <br/> Abunəçi
      </Link>
      </div>
      <div className='bg-blue-700 w-308 h-464 py-4  px-6 relative flex flex-col items-center justify-center mt-8'>
        <Image src='/host/host6.png' alt='host6' width={128} height={128} />
        <Link className='mt-8 font-inter text-3xl font-bold leading-9 tracking-normal text-center text-white'href="https://www.youtube.com">24M <br/> Baxış
      </Link>
    </div>
    </div>
  );
};

export default Achievements;

