import React from 'react';
import Link from 'next/link';
const WhatOurListenersSay = () => {
  return (
    <div className=" sm:flex sm:flex-col sm:items-start sm:space-y-4 py-4 stick ">
      <div className="sm:flex sm:items-center sm:justify-end w-full stick sm:top-3 lg:left-1">
        <div className="w-full sm:w-512 h-126 stick mt-3">
          <h1 className="font-inter text-blue-700 text-2xl font-bold leading-9 tracking-normal text-left">
          Dinləyicilərimiz nə deyir?
          </h1>
          <div className="mt-2">
            <p className="font-inter text-base font-normal leading-6 tracking-normal text-left text-body">
              Düşürəm ki, möhtəşəm layihədir, fərqli mövzular da <br/> 
              aktuallığı ilə seçilir, maraq dairəmizi uyğundur, belə ki,<br/>
                dünyagörüşümüzün formalaşmasında mühüm rolu vardır.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-12 sm:flex-row sm:space-x-4 mt-4 sm:mt-0 ">
          <Link href="https://www.youtube.com/watch?v=26PrgjTboVQ">
          <button className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-full">
            <span>&larr;</span>
          </button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=-8Yu2GiuSns"><button className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-full mt-2 sm:mt-0">
            <span>&rarr;</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatOurListenersSay;
