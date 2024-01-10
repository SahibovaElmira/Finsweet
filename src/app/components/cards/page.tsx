

import React from 'react';
import Card from '../Card';
import Image from 'next/image';

const Cards: React.FC = () => {
  const data = [
    {
      title: 'Ep 1: Dünya səviyyəli biznes brendini necə qurmaq olar?',
      content: 'Yaxşı ad çox vaxt biznesin ən qiymətli aktivlərindən biridir.',
      imageUrl: '/Home/Home4.png',
    },
    {
      title: 'Ep 2: Biznesiniz üçün ilk 100 müştərini əldə edin',
      content: 'Yeni müştərilərin cəlb olunması alətləri və yolları haqqında məlumat',
      imageUrl: '/Home/Home5.png',
    },
    {
      title: 'Ep 3: Başlamaq üçün nə qədər sərmayə olmalıdır?',
      content: 'Əməliyyatlara başlamaq üçün kapital götürmək istədiyiniz zaman biznes planları vacib rol oynayır.',
      imageUrl: '/Home/Home6.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default Cards;
