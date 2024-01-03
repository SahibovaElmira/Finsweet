import React from 'react';
import Image from 'next/image';
import Brands from '../components/brands/page';

const Home = () => {
  return (
    <div className='stick py-14 pr-4 w-1024 h-302 top-264 left-208'>
      <div>
        <p className=' backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>
          Become The Hero<br /> Of Your Own Story
        </p>
        <p className=" w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />sed diam nonumy eirmod tempor invidunt ut labore<br /> et dolore magna aliquyam erat.
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          className="flex py-14 pl-12 px-12 top-0"
          src="/Home/Audio track.png"
          width={432}
          height={256}
          alt="Audio track"
        />
      </div>
      <Brands />
      <div className='stick py-14 pr-4 w-1024 h-302 top-264 left-208'>
        <div>
          <p className=' backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>A podcast for makers and <br/> entrepreneurs</p>
          <p className=" w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3">
          Apparently we had reached a great<br/> height in the atmosphere, for the sky<br/> was a dead black, and the stars had <br/>ceased to twinkle. .</p>

        </div>
        <div className="flex justify-end">
          <Image
            className="w-96 h-96 top-1229 left-813"
            src="/Home/Home2.png"
            width={50}
            height={50}
            alt="Girl"
          />
           <Image
            className="py-14 pl-[80] px-36 top-[40]"
            src="/Home/Home1.png"
            width={500}
            height={100}
            alt="Boy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
