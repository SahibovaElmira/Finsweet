import React from 'react';

const Articles: React.FC = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card mx-2">
          <h2 className="card-title font-inter text-2xl font-bold leading-9 tracking-normal text-left">
            Xəbərləri və məqalələrimizi oxuyun
          </h2>
          <button className='text-blue-700 mt-2 md:mt-4'>Daha çox</button>
          <img className="card-image" src="/Home/MaskGroup.png" alt="MaskGroup" />
        </div>

        <div className="card mx-2">
          <img className="card-image" src="/Home/Dollar.png" alt="Dollar" />
          <h2 className="card-title font-inter text-lg font-semibold leading-7 tracking-normal text-left">
           Biznes layihəniz üçün ilk 100 müştərini əldə edin
          </h2>
          <p className='font-inter text-sm font-normal leading-6 tracking-normal text-left'>
          &emsp;Müştərini necə cəlb etmək olar? – sualı bir çox sahibkar, biznesmen və satış mütəxəssisini narahat edən sualdır. 
          </p>
          <button className='text-blue-700 mt-2 md:mt-4'>İndi oxu</button>
        </div>

        <div className="card mx-2">
          <img className="card-image" src="/Home/Computer.png" alt="Computer" />
          <h2 className="card-title text-center font-inter text-base font-semibold leading-7 tracking-normal ">
          Biznesə başladıqda atmalı olduğunuz ilk addım müştərinin psixoloji portretinin yaradılması haqqında
          </h2>
          <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">
          &emsp;Müştərilərin hansı məhsula tələbatlarının olduğunu araşdırmaqla işinizi ilk başdan sağlam təməl ilə qura bilərsiniz..
          </p>
          <button className='text-blue-700 mt-2 md:mt-4'>İndi oxu</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;


