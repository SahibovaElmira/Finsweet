import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const PodcastHeader = () => {
  return (
    <div className="relative h-screen bg-cover bg-center text-white p-4 md:p-8 text-center md:text-left" style={{ backgroundImage: "url('/Podcast/Podcast1.png')" }}>
    <div className="absolute w-1440 h-564 top-2294 left-[-2px] bg-cover bg-center">
          <Image src="/Podcast/Podcast2.png" alt="Podcast Image" layout="fill" objectFit="cover" />
</div>
        <div className='bg-blue-700 w-full md:w-96 h-auto md:h-65 py-4 px-8 grid grid-cols-1'>
          <h1 className="font-bold text-xl md:text-3xl mb-4 py-10">
            Seçilən
          </h1>
          <p className='italic font-inter text-base md:text-lg leading-7 md:leading-8 text-justify'>
           <span className=' font-extrabold '> UX HAQQINDA</span>  <br/>
            UX-in məqsədi istifadə etdiyiniz sistemi sadə, problemsiz və asan şəkildə işlətmək, yəni başa düşülən formaya salmaqdır.
          </p>
          <Link href="https://www.youtube.com/watch?v=55NvZjUZIO8">
            <p className='text-center md:text-left md:w-2/5 lg:w-1/4 xl:w-1/5 mt-4 md:mt-8 block text-white font-extrabold italic text-extrabold bg-red-500 border border-red-700 rounded-md p-2'>Ətraflı</p>
          </Link>
        </div>
      </div>
    
  );
};

export default PodcastHeader;

