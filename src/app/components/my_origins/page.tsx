import React from 'react';
import Image from 'next/image';

const MyOrigins = () => {
  return (
    <div className='stick pt-14 mx-auto grid grid-cols-1 sm:grid-cols-2'>
      <div className='sm:order-1'>
        <Image
          className='flex py-14 pl-12 px-12 top-0'
          src='/Home/Left.png'
          width={740}
          height={512}
          alt='Left'
        />
      </div>
      <div className='py-12 sm:order-2 mt-4  sm:mt-0'>
        <p className='backdrop:w-full text-red-900 first-letter:sm:backdrop:w-440 h-50 sm:h-auto sm:top-0 right-8 sm:right-0 font-inter text-4xl font-bold leading-11 tracking-tight text-center px-3 mb-3 sm:mb-0 backdrop:py-3'>
          2023-cü ildə Youtube kanalımda mövzular
        </p>
       
        <p className='text-left px-5 py-8 sm:py-3'>
         &emsp; Fəlsəfədə, mövzu xaricə zidd olaraq düşünülən insan ruhudur.
         Müasir fəlsəfənin atası Rene Dekart mövzunu öz qərarlarını verməkdən məsul
         olan rasional bir varlıq olaraq araşdırdı.
  </p>
</div>
</div>

   
  );
};

export default MyOrigins;

