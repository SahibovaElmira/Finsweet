import React from 'react';
import Image from 'next/image';

const AboutTheHost = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-2 mt-8">
      <div className="mr-4 md:mr-8 mb-4 md:mb-0">
        <Image src="/host/host1.png" alt="host1" width={300} height={300} />
      </div>
      <div>
        <h2 className="font-inter text-base font-semibold leading-5 tracking-wider text-left text-blue-800">HOST HAQQINDA</h2>
        <p className="font-inter text-2xl font-bold leading-9 tracking-normal text-left text-cyan-900">Salam, mən Endryu Consonam və Podkastimə xoş gəlmisiniz!</p>
        <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">Biz atmosferdə yüksəkliyə çatmışdıq, səma çox qara idi, ulduzlar parıldamırdı.</p>
        <button className='bg-blue-700 px-2 py-2 mt-2 text-white' >Daha ətraflı</button>
      </div>
    </div>
  );
};

export default AboutTheHost;
