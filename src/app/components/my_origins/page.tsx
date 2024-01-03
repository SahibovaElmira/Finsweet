import React from 'react';
import Image from 'next/image';


const My_origins = () => {
    return (
      <div className='stick  pt-14  mx-auto  grid  grid-cols-2 '>
       
        <div className="flex justify-end">
          <Image
            className="flex py-14 pl-12 px-12 top-0"
            src="/Home/Left.png"
            width={432}
            height={256}
            alt="Left"
          />
        </div>
        <div>
          <p className=' backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>
          My origins on<br/> YouTube in 2008
          </p>
          <p className=" w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3">
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Mus cras<br/> lacus tellus morbi viverra suspendisse<br/> ornare. Sit volutpat, volutpat ut netus <br/>malesuada enim penatibus non aliquet.
          </p>
        </div>
        </div>
         );
        };
        
        export default My_origins;

