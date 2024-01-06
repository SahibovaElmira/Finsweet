import React from 'react';

const WhatOurListenersSay = () => {
  return (
    <div className=" sm:flex sm:flex-col sm:items-start sm:space-y-4 py-4 stick ">
      <div className="sm:flex sm:items-center sm:justify-end w-full stick sm:top-3 lg:left-1">
        <div className="w-full sm:w-512 h-126 stick mt-3">
          <h1 className="font-inter text-2xl font-bold leading-9 tracking-normal text-left">
            What our listeners say
          </h1>
          <div className="mt-2">
            <p className="font-inter text-base font-normal leading-6 tracking-normal text-left text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras <br/> 
               lacus tellus morbi viverra suspendisse ornare. Sit volutpat,<br/>
                volutpat ut netus malesuada enim penatibus non aliquet.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-12 sm:flex-row sm:space-x-4 mt-4 sm:mt-0 ">
          <button className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-full">
            <span>&larr;</span>
          </button>
          <button className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-full mt-2 sm:mt-0">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatOurListenersSay;
