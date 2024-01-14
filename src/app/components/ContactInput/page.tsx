import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const ContactInput = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 py-8'>
      <div className='col-span-2 md:col-span-1'>
        <h1 className='text-2xl font-bold'>Bizimlə əlaqə saxlayın</h1>
        <p className='text-blue-700 mb-4'>
          Əməkdaşlıq etməkdə maraqlısınız? Zəhmət olmasa aşağıdakı formanı doldurun.
        </p>
        <form>
          <h2 className='px-3 text-2xl font-bold mb-5 text-white'>Əlaqə</h2>
          <h3 className='px-3 text-2xl font-bold mb-5 text-white'>Telefon:(070) 240 80 04</h3>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Adınızı və soyadınızı daxil edin'
              name='name'
              className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
            <input
              type='email'
              placeholder='Email daxil edin'
              name='email'
              className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Məlumatı daxil edin'
              name='message'
              className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
          </div>
          <button className='px-6 mb-5 py-3 text-sm font-bold text-gray-400 uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-100'>
            Məktubu göndər
          </button>
        </form>
      </div>

      <div className='grid grid-cols-2 gap-4 col-span-2 md:col-span-1 mb-2'>
        {/* Birinci sütun */}
        <div className='flex flex-col gap-4'>
          <h1 className='ml-2 text-blue-950 font-bold'>Abunə olun</h1>
          <div className='flex items-center'>
            <Image src='/Home/Iconi.png' alt='Icon' width={25} height={12} />
            <Link href='https://www.apple.com/az/apple-podcasts/'>
              <p className='ml-3'>Apple Podcasts</p>
            </Link>
          </div>
          <div className='flex items-center'>
            <Image src='/Home/Cloud.png' alt='Cloud' width={25} height={12} />
            <Link href='https://soundcloud.com/'>
              <p className='ml-3'>SoundCloud</p>
            </Link>
          </div>
        </div>

        {/* İkinci sütun */}
        <div className='flex flex-col gap-4 mt-8'>
          <div className='flex items-center'>
            <Image src='/Home/Lines.png' alt='Lines' width={25} height={12} />
            <Link href='https://podcasts.google.com/'>
              <p className='ml-3'>Google Podcasts</p>
            </Link>
          </div>
          <div className='flex items-center'>
            <Image src='/Home/Vector.png' alt='Vector' width={25} height={12} />
            <Link href='https://open.spotify.com/'>
              <p className='ml-3'>Spotify</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='text-blue-700 flex flex-col justify-center items-center gap-4 col-span-3 ml-11 pl-11 h-1 mb-4 mt-4 '>
  <h2 className='text-blue-950 font-extrabold '>Sosial şəbəklər</h2>
  <div style={{ display: 'flex', gap: '10px' }}>
    <Link href='https://www.facebook.com/?locale=ru_RU'>
      <FaFacebook />
    </Link>
    <Link href='https://twitter.com/?lang=ru'>
      <FaTwitter />
    </Link>
    <Link href='https://ru.linkedin.com/'>
      <FaLinkedin />
    </Link>
  </div>
</div>


      <div className='flex justify-end items-center col-span-2 md:col-span-3'>
        <Image src='/Contact/Contact1.png' alt='Contact' width={279} height={320} mb-4 />
      </div>
    </div>
  );
};

export default ContactInput;
