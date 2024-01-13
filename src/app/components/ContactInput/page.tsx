import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const ContactInput = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-8'>
      <div className='col-span-2'>
        <h1 className='text-2xl font-bold'>Bizimlə əlaqə saxlayın</h1>
        <p className='text-blue-700 mb-4'>Əməkdaşlıq etməkdə maraqlısınız? Zəhmət olmasa aşağıdakı formanı doldurun.</p>
        <form action="/action_page.php" method="POST">
          <label htmlFor="fname">Adınız</label><br />
          <input type="text" id="fname" name="fname" defaultValue="Elmira" /><br />
          <label htmlFor="email">E-mail daxil edin</label><br />
          <input type="email" id="email" name="email" />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className='flex flex-col justify-center items-center gap-4 col-span-2'>
        <p className='mb-4 text-center'>Abunə olun</p>
        <div className='flex items-center'>
          <Image src='/Home/Iconi.png' alt='Icon' width={25} height={12} />
          <Link href="https://www.apple.com/az/apple-podcasts/">
            <p className='ml-2'>Apple Podcasts</p>
          </Link>
        </div>
        <div className='flex items-center mt-4'>
          <Image src='/Home/Cloud.png' alt='Cloud' width={25} height={12} />
          <Link href="https://soundcloud.com/">
            <p className='ml-2'>SoundCloud</p>
          </Link>
        </div>
        <div className='flex items-center mt-4'>
          <Image src='/Home/Lines.png' alt='Lines' width={25} height={12} />
          <Link href="https://podcasts.google.com/">
            <p className='ml-2'>Google Podcasts</p>
          </Link>
        </div>
        <div className='flex items-center mt-4'>
          <Image src='/Home/Vector.png' alt='Vector' width={25} height={12} />
          <Link href="https://open.spotify.com/">
            <p className='ml-2'>Spotify</p>
          </Link>
        </div>
      </div>

      <div className='text-blue-700 flex flex-col justify-center items-center gap-4 col-span-1'>
        <h2>Sosial şəbəklər</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="https://www.facebook.com/?locale=ru_RU">
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

      <div className='flex justify-end items-center col-span-2 md:col-span-1'>
        <Image src="/Contact/Contact1.png" alt="Contact" width={200} height={280} />
      </div>
    </div>
  );
}

export default ContactInput;

