import React from 'react';
import Image from 'next/image';

const Subscribe: React.FC = () => {
  return (
    <div className="relative w-full left-0 h-auto top-3560 py-8 px-8 bg-blue-700">
      <div className="flex flex-col items-center w-full lg:w-2/3 xl:w-1/2 h-auto mx-auto mb-4">
        
      <Image
        src="/Home/Mikrofon.png"
        alt="mikrofon"
        width={80}
        height={85}
        style={{ top: '-10px', left: '0px', position: 'absolute', transform: 'rotate(340deg)' }}
      />

        <p className="font-inter text-2xl font-bold leading-10 text-center mb-4 lg:mb-0">
          Elektron poçt vasitəsilə əldə et.
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full mx-auto">
          <input
            type="text"
            placeholder="E-mail daxil edin"
            className="w-full lg:w-2/3 xl:w-3/4 h-12 text-center rounded-md p-2 mb-2 lg:mb-0 lg:mr-2"
          />
          <button className="w-full lg:w-auto h-12 bg-green-500 rounded-md px-4">
            Abunə olun
          </button>
          <Image
        src="/Home/Mikrofon.png"
        alt="mikrofon"
        width={80}
        height={85}
        style={{ bottom: '10px', right: '0px', position: 'absolute', transform: 'rotate(0deg)' }}
      />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;








