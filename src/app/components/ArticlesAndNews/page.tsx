import React from 'react';

const Articles: React.FC = () => {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card mx-2">
          <h2 className="card-title font-inter text-2xl font-bold leading-9 tracking-normal text-left">
            Read our articles & news
          </h2>
          <button className='text-blue-700 mt-2 md:mt-4'>See more</button>
          <img className="card-image" src="/Home/MaskGroup.png" alt="MaskGroup" />
        </div>

        <div className="card mx-2">
          <img className="card-image" src="/Home/Dollar.png" alt="Dollar" />
          <h2 className="card-title font-inter text-lg font-semibold leading-7 tracking-normal text-left">
            Getting the first 100 customers for your business
          </h2>
          <p className='font-inter text-sm font-normal leading-6 tracking-normal text-left'>
            Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <button className='text-blue-700 mt-2 md:mt-4'>Read now</button>
        </div>

        <div className="card mx-2">
          <img className="card-image" src="/Home/Computer.png" alt="Computer" />
          <h2 className="card-title font-inter text-base font-semibold leading-7 tracking-normal text-left">
            Apparently we had reached a great height in the atmosphere, ...
          </h2>
          <p className="font-inter text-base font-normal leading-6 tracking-normal text-left">
            Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
          </p>
          <button className='text-blue-700 mt-2 md:mt-4'>Read now</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;


