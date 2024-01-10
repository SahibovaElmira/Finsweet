import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div style={{paddingTop:"4rem"}} className="bg-black  w-1500 h-574 flex flex-col sm:flex-row justify-between items-center sm:gap-4 px-5 sm:px-12 py-9 pt-12 sm:py-11">
      <div>
        <ul className="text-black">
          <li>
            <Link href="/home">
              <p className='text-white'>&#123;Finsweet</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h1 className='text-white'>Səhifələr</h1>
        <ul className="text-black">
          <li>
            <Link href="/home">
              <p className='text-white'>Ana Səhifə</p>
            </Link>
          </li>
          <li>
            <Link href="/podcasts">
              <p className='text-white'>Podkast</p>
            </Link>
          </li>
          <li>
            <Link href="/host">
              <p className='text-white'>Host</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p className='text-white'>Bloq</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-white'>Bizə qoşulmaq üçün</p>
        <ul>
          <li>
            <Link href="/about">
              <p className='text-white'>Haqqımızda</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className='text-white'>Əlaqə</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-white'>Abunə ol</p>
        <div className='flex flex-col '>
          <div className='flex items-center'>
            <Image src='/Home/Iconi.png' alt='Icon' width={25} height={12} />
            <Link href="https://www.apple.com/az/apple-podcasts/">
            <p className='ml-2 text-white'>Apple Podcasts</p>
            </Link>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Cloud.png' alt='Cloud' width={25} height={12} />
            <Link href="https://soundcloud.com/">
            <p className='ml-2 text-white'>SoundCloud</p>
            </Link>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Lines.png' alt='Lines' width={25} height={12} />
            <Link href="https://podcasts.google.com/">
            <p className='ml-2 text-white'> Google Podcasts </p>
            </Link>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Vector.png' alt='Vector' width={25} height={12} />
            <Link href="https://open.spotify.com/">
            <p className='ml-2 text-white'>Spotify</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;

