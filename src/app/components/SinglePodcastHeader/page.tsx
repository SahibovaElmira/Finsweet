import React from 'react';
import Image from 'next/image';
import ListenNowButton from '../Listen/page';

const SinglePodcastHeader = () => {
  return (
    <div className="relative mb-11 flex flex-col md:flex-row">
      <div className="flex-shrink-0 w-full md:w-1/2 h-94 md:mr-4 mb-4 md:mb-14">
        <Image src="/SinglePodcast/SinglePodcast1.png" alt="Biznesmen" width={616} height={400} objectFit="cover" />
      </div>
      <div className="flex-grow">
        <h1 style={{ fontSize: '25px' }} className="w-full h-10 mt-4 mb-2 md:mt-8 md:mb-4 font-18 italic font-bold text-pink-900">BİZNES</h1>
        <p className="w-full h-10 mb-2 md:mb-4 text-blue-800 font-bold text-sm md:text-base">Ep 2: Biznesiniz üçün ilk 100 müştərini əldə edin</p>
        <p className="w-full h-10 mb-4 text-body text-sm md:text-base">Yeni müştərilərin cəlb olunması alətləri və yolları haqqında məlumat</p>
        <ListenNowButton />
      </div>
         </div>
  );
};

export default SinglePodcastHeader;




