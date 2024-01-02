import React from 'react';
import Image from 'next/image';

const Brands= () => {
  return (
    <div className='flex justify-center px-12 gap-12 py-11 '>
     <p> Podcast Available On</p>
     <Image
      src="/Home/Iconi.png"
         alt="Icon"
      width={25}
      height={12}
    />
     <p> Apple  Podcats</p>
     <Image
      src="/Home/Cloud.png"
         alt="Cloud"
      width={25}
      height={12}
    />
     <p>Sound Cloud</p>
     <Image
      src="/Home/Lines.png"
         alt="Lines"
      width={25}
      height={12}
    />
     <p>Google Podcats</p>
     <Image
      src="/Home/Vector.png"
         alt="Vector"
      width={25}
      height={12}
    />
     <p>Spotify</p>
    </div>
  )
}

export default Brands
