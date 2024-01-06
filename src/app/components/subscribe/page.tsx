import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="relative w-full lg:w-1280 left-0 lg:left-1 h-auto top-3560 py-8 px-8 bg-blue-700">
      <div className="flex flex-col items-center w-full lg:w-2/3 xl:w-1/2 h-auto mx-auto mb-4">
        <p className="font-inter text-2xl font-bold leading-10 text-center mb-4 lg:mb-0">
          Receive new episodes in your inbox.
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full mx-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full lg:w-2/3 xl:w-3/4 h-12 text-center rounded-md p-2 mb-2 lg:mb-0 lg:mr-2"
          />
          <button className="w-full lg:w-auto h-12 bg-green-500 rounded-md px-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;







