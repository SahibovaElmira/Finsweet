import React from 'react';
import Image from 'next/image';

const DreamSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:mr-8 mb-4 md:mb-0">
        <h1 className=" font-bold mb-4 font-inter text-2xl  leading-9 tracking-normal text-left text-yellow-800">Böyük bir xəyal haqqında kiçik bir hekayə -</h1>
        <p className="mb-4 font-inter text-base font-normal leading-6 tracking-normal  text-left text-red-900">
          Görünür, biz atmosferdə böyük bir hündürlüyə çatmışdıq, çünki səma tam qara idi və ulduzlar daha parıldamırdı.
          Eyni illüziya ilə
        </p>
        <p className='font-inter text-base font-semibold leading-7 tracking-normal text-left text-red-800'>
          Səmanı ulduzlarsız təsəvvür etmək çətin idi. Düşüncələrə qapıldım...
        </p>
      </div>
      <div>
        <Image src="/host/host2.png" alt="host2" width={630} height={615} />
      </div>
    </div>
  );
};

export default DreamSection;
