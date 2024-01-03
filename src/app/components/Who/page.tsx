import React from 'react';
import Image from 'next/image';


const Who = () => {
    return (
      <div className='stick  pt-14  mx-auto  grid  grid-cols-2 '>
        <div className='  mx-auto  grid  grid-cols-2  '>
        <div>
          <p className=' backdrop:w-full sm:backdrop:w-440 h-50 top-20 left-8 sm:left-208 font-inter text-4xl font-bold leading-11 tracking-tight text-left px-3 mb-3 sm:mb-0 backdrop:py-3'>A podcast for makers and <br/> entrepreneurs</p>
          <p className=" w-full sm:w-466 h-84 top-40 left-8 sm:left-208 font-inter text-base font-normal leading-7 tracking-normal text-left px-5 py-8 sm:py-3">
          Apparently we had reached a great<br/> height in the atmosphere, for the sky<br/> was a dead black, and the stars had <br/>ceased to twinkle. .</p>

        </div>
        <div className=" size-96 relative flex justify-end bg-blue-700 mx-auto  ">
  <Image
    className=" px-5 py-16 right-6  absolute bottom-[5px] left-[-20px] "
    src="/Home/Home2.png"
    width={96}
    height={96}
    alt="Girl"
  />
  <Image
    className="py-12 pl-[80] px-4 top-[40]"
    src="/Home/Home1.png"
    width={384}
    height={384}
    alt="Boy"
  />
</div>

      </div>
      
    </div>
    
         );
        };
        
        export default Who;