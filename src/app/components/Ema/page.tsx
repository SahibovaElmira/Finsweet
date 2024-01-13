import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Ema = () => {
  return (
    <div className='ml-8 mr-8 mt-4 mb-4' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <div style={{ flex: '0 1 200px', marginRight: '20px' }}>
        <Image 
          src="/SingleBlog/SingleBlog2.png" 
          alt="Ema" 
          width={64} 
          height={64}
        />
        <h1 className='text-blue-800 font-bold text-2xl'>Ema Sarxani</h1>
        <p className='text-blue-900 text-xl'>Marketoloq</p>
        <div className='text-blue-700' style={{ display: 'flex', gap: '10px' }}>
          <Link href="https://www.facebook.com/?locale=ru_RU">
            <p>
              <FaFacebook />
            </p>
          </Link>
          <Link href='https://twitter.com/?lang=ru'>
            <p>
              <FaTwitter />
            </p>
          </Link>
          <Link href='https://ru.linkedin.com/'>
            <p>
              <FaLinkedin />
            </p>
          </Link>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <p className='text-justify ml-2 mr-8'>
          Bütün bu planlama və təqdimata hazırlıq yolunun sonunda isə reklam və kommunikasiya durur. Marketinq şöbəsi müəyyən edir ki, məhsul və onun haqqında məlumatlar, müştərilərə olunan təkliflər hansı reklam kanalları üzərindən aparılacaq. Bu zaman da işə ənənəvi marketinq və günümüzdə aktuallıq qazanan rəqəmsal marketinq strategiyaları girir. Bu strategiyalara əsasən müəyyən edilir ki, siz müştərilərin qarşısına hansı üsullarla və haradan çıxacaqsınız.
        </p>
        <p>
          Nəticədə, bütün bu tələbatlar və strategiyalar zövqü, istəkləri, düşüncə və seçimləri tez-tez dəyişən istehlakçıya uyğunlaşa bilmək üçündür. Bu da marketinqin qarşısında duran əsas məsələdir.
        </p>
      </div>
    </div>
  );
}

export default Ema;
