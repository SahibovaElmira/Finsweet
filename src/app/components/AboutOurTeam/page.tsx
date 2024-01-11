import React from 'react';
import Image from 'next/image';

const AboutOurTeam = () => {
  return (
    <div>
        <div> <h1 className="text-4xl font-bold text-center mb-4">Peşəkar komandamız haqqında</h1>
        <Image
          src="/About/About2.png"
          alt="Haqqında"
          width={1250}
          height={734}
          className="mx-auto md:ml-11 md:mr-11 mb-4 mt-4"
        />
</div>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative'>
      <div className='md:col-span-1 relative'>
        <p className='col-span-1 md:col-span-2'>
          Biznes üçün effektiv komandanın formalaşdırılmasında uğurun açarı insanlardır.
          Amma bu, sadəcə bir açıqlamadır... Sirr başqadır: onların kim olduğunu, biznesiniz
          üçün bu insanların kim olduğunu, onların effektivliyinin əsas prinsipinin nədən ibarət olduğunu,
          onları irəli aparan qüvvənin nə olduğunu müəyyən etmək və anlamaq prinsipial olaraq vacibdir.
        </p>
      </div>
      <div className='md:col-span-1 grid gap-4'>
        <p className='col-span-1 md:col-span-2'>
          Peşəkar komandanın işi effektivliyi ilə xarakterizə olunur. Biznes üçün cəlbedici olan performansdır.
          Bu, sabit komanda effektləri ilə təmin edilir. Komandaların formalaşdırılması bu komanda effektlərinə
          nail olmaq üçün lazımdır ki, bu da öz növbəsində daha güclü biznesə gətirib çıxarır.
          Müsbət və müntəzəm təsir komandanın inkişafı işinin məqsədi və nəticəsidir.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutOurTeam;
