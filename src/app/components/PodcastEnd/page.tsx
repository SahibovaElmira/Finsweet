import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PodCastEnd = () => {
  return (
    <div className="relative h-screen bg-cover bg-center text-white p-4 md:p-8 text-center md:text-left" style={{ backgroundImage: "url('/Podcast/Podcast2.png')" }}>
          <div className="absolute w-1440 h-586 top-2294 left-[-2px] bg-cover bg-center">
                <Image src="/Podcast/Podcast2.png" alt="Podcast Image" layout="fill" objectFit="cover" />
      </div>
      
      <h1 className="font-bold text-xl md:text-3xl mb-4 py-10">
        Öz Hekayənizin Qəhrəmanı Olun
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className='italic font-inter text-base md:text-lg leading-7 md:leading-8 text-justify'>
          Bu günə qədər bütün layihələrimizi sevərək həyata keçirmişəm. Hazırda daha çox IT, rəqəmsallaşma, delta ilə bağlı layihələrdə işitrak edirəm və bu sahədə də böyük layihələri idarə edirəm.
        </p>
        <p className='italic font-inter text-base md:text-lg leading-7 md:leading-8 text-justify'>
          
        </p>
      </div>
      <Link href="/contact">
        <p className='text-left mt-4 md:mt-8 block text-blue-300 text-extrabold italic'>ƏLAQƏ</p>
      </Link>
    </div>
  );
};

export default PodCastEnd;

