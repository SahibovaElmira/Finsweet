

import React from 'react';
import Card from '../Card';
import Image from 'next/image';

const Cards: React.FC = () => {
  const data = [
    {
      title: 'Ep 1: How to build a world-class business brand',
      content: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
      imageUrl: '/Home/Home4.png',
    },
    {
      title: 'Ep 2: Getting the first 100 customers for your business',
      content: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
      imageUrl: '/Home/Home5.png',
    },
    {
      title: 'Ep 3: Should I raise money for my startup, or not?',
      content: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
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
