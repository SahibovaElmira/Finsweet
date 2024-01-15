

import React from 'react';
import ProjectCard from '../ProjectCard';
import Image from 'next/image';

const TestimonialCards: React.FC = () => {
  const data = [
    {
      title: 'Nura Əliyeva',
      content: 'Podkastların mövzusu mükəmməl seçilib. Düşünürəm ki, insan mənəviyyatını zənginləşdirən amillərə xüsusi önəm verilmişdir.',
      imageUrl: '/Home/Home7.png',
    },
    {
      title: 'Əli Vəliyev',
      content: 'Hər gün yeni məlumatlar almaq üçün bu səhifəyə keçid edirəm. ',
      imageUrl: '/Home/Home8.png',
    },
    {
      title: 'Tofiq Sahibi',
      content: 'Bu gün bizim üçün bu cür imkanların olduğuna görə təşəkkür edirəm. Asudə vaxtımızı səmərəli keçirərək, maraqlı mövzularla tanış oluruq.',
      imageUrl: '/Home/Home9.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center px-2">
      {data.map((item, index) => (
        <ProjectCard key={index} title={item.title} content={item.content} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default TestimonialCards;
