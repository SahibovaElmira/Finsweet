import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='stick pt-14 mx-auto grid grid-cols-1 sm:grid-cols-2'>
      <div className='sm:order-2 sm:pr-8'>
      <Link href="https://www.youtube.com/results?search_query=podcasts">
        <Image
          className='flex py-14 pl-12 px-12 top-0'
          src='/Home/Audio track.png'
          width={432}
          height={256}
          alt='Audio track'
        />
        </Link>
      </div>
      <div className='sm:order-1 sm:w-full'>
      <p className="text-justify text-blue-700 marker:backdrop:w-full sm:backdrop:w-440 h-50 sm:h-auto sm:top-20 right-0 sm:right-8 font-inter text-4xl font-bold leading-11 tracking-tight  px-3 mb-3 sm:mb-0 backdrop:py-3">
  Öz Hekayənizin<br /> Qəhrəmanı Olun
</p>

        <p className='w-full sm:w-466 h-84 top-40 sm:top-0 right-0 sm:right-8 font-inter text-cyan-900 text-bold first-line:text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3'>
       İdmançılar,  biznesmenlər,  sənətkarlar  və hər gün daha da
          <br /> çox uğur sahibi olaraq gördüyümüz bir çox məşhur şəxsləri
          <br /> yüksəkliyə aparan yolu anlatmaq istərdim.
        </p>
      </div>
    </div>
  );
};

export default Header;
