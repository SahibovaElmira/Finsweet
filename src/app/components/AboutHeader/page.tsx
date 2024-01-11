import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center'>
      <div className='relative'>
        <h1 className='font-inter text-4xl font-bold leading-10 tracking-tight text-left mt-6 md:mt-0 md:ml-10'>
          Finsweet Podkastları haqqında
        </h1>
        <p className='mt-4 md:mt-2 md:ml-10 font-inter text-base font-normal leading-6 tracking-normal text-left'>
          Podkastlar onlayn yüklənə və ya dinlənə bilən audio proqramlar, seriallar və ya bloqlardır. <br />
          Finsweet podkastları aktual mövzularla fərqlənir.
        </p>
        <Link href='/contact'>
          <p className='mt-4 md:mt-2 md:ml-10 w-[14rem] h-9 py-2 text-white bg-blue-900 text-center'>
            İndi abunə olun
          </p>
        </Link>
      </div>
      <div className='flex justify-center items-center  mt-8 md:mt-0 md:mr-10'>
        <Image src='/About/About1.png' alt='Mikrofon' width={420} height={420} />
      </div>
    </div>
  );
};

export default AboutHeader;
