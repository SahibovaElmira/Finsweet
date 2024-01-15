import Link from 'next/link';
import React from 'react';
import podcats from '@/app/podcasts/page';

const TopRow = () => {
  return (
    <div className="sm:flex sm:flex-col sm:items-start sm:space-y-4 py-4 px-4">
      <div className="sm:flex sm:items-center sm:justify-between w-full">
        <div>
          <h1 className="font-inter text-2xl font-bold leading-9 tracking-normal text-left">Son epizodlar</h1>
          <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">Qəflətən çox yüksəkliyə qalxdıq, <br/>
          qorxudan əsirdim</p>
        </div>
        <Link href="/podcasts">
        <button className="font-inter text-base font-medium leading-6 tracking-normal text-left
          w-full sm:w-[195px] h-[48px] sm:h-[48px] px-[32px] sm:px-0 py-[12px] gap-10
          bg-blue-500 text-white">
        Bütün epizodlara bax
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRow;



