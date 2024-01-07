import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black  w-1500 h-574 flex flex-col sm:flex-row justify-between items-center sm:gap-4 px-5 sm:px-12 py-8 sm:py-11">
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
        <h1 className='text-white'>Pages</h1>
        <ul className="text-black">
          <li>
            <Link href="/home">
              <p className='text-white'>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/podcasts">
              <p className='text-white'>Podcast</p>
            </Link>
          </li>
          <li>
            <Link href="/host">
              <p className='text-white'>Host</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p className='text-white'>Blog</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-white'>Reach Us</p>
        <ul>
          <li>
            <Link href="/about">
              <p className='text-white'>About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className='text-white'>Contact</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-white'>Subscribe</p>
        <div className='flex flex-col '>
          <div className='flex items-center'>
            <Image src='/Home/Iconi.png' alt='Icon' width={25} height={12} />
            <p className='ml-2 text-white'>Apple Podcasts</p>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Cloud.png' alt='Cloud' width={25} height={12} />
            <p className='ml-2 text-white'>SoundCloud</p>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Lines.png' alt='Lines' width={25} height={12} />
            <p className='ml-2 text-white'>Google Podcasts</p>
          </div>
          <div className='flex items-center mt-4 sm:mt-0'>
            <Image src='/Home/Vector.png' alt='Vector' width={25} height={12} />
            <p className='ml-2 text-white'>Spotify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

