import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Who = () => {
  return (
    <div className='stick pt-14 mx-auto grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <p className='backdrop:w-full text-blue-900 sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>
          Yaratmaq istəyənlər üçün <br />podkastlar
        </p>
        <p className='w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3'>
        Xoşbəxtliyin nə dünəni, nə də sabahı var<br/> keçmişi xatırlamır, gələcəyi düşünmür.<br/> Onun üçün  yalnız bu gün var, <br/>o da bütöv bir gün yox, andır.
        </p>
      </div>

      <div className='sm:order-2 sm:pr-8'>
     <Link href=' https://www.youtube.com/watch?v=7TWKKww-F30'>
        <Image
          className='flex py-14 pl-12 px-12 top-0'
          src='/Home/Right.png'
          width={740}
          height={512}
          alt='Right'
        />
        </Link>
      </div>
    </div>
  );
};

export default Who;
