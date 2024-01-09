import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="relative h-screen bg-cover text-white p-4 md:p-8 text-center md:text-left" style={{ backgroundImage: "url('/host/host7.png')" }}>
      <h1 className="font-bold text-xl md:text-3xl mb-4 py-10">
        Öz Hekayənizin Qəhrəmanı Olun
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className='italic font-inter text-base md:text-lg leading-7 md:leading-8 text-justify'>
          Disneyland-in əsasını qoymaq istəyən Uolter Disney kredit üçün banklara müraciət etməli olmuşdur. Yalnız 303-cü bank onun müraciətinə müsbət cavab vermişdir. Stiv Makkerinin “The Afgan Girl” rəsmini Da Vinçinin məşhur “Mona Liza” şedevrinə bərabər tutulması üçün 35 il ərzində 1 milyondan artıq fotoşəkil çəkilməsi tələb olunmuşdu.
        </p>
        <p className='italic font-inter text-base md:text-lg leading-7 md:leading-8 text-justify'>
          
        </p>
      </div>
      <Link href="/contact">
        <p className='text-left mt-4 md:mt-8 block text-yellow-300 text-extrabold'>ƏLAQƏ</p>
      </Link>
    </div>
  );
};

export default CTA;
