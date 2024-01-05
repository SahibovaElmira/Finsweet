

import React from 'react';
import ProjectCard from '../ProjectCard';
import Image from 'next/image';

const TestimonialCards: React.FC = () => {
  const data = [
    {
      title: 'Eve Madien',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.',
      imageUrl: '/Home/Home7.png',
    },
    {
      title: 'Ash Benfred',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. ',
      imageUrl: '/Home/Home8.png',
    },
    {
      title: 'Ryan Smith',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.',
      imageUrl: '/Home/Home9.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <ProjectCard key={index} title={item.title} content={item.content} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default TestimonialCards;
