
import React from 'react';
import <CardBlog></CardBlog>

const data = [
  {
    id: 1,
    imageUrl: '/Blog/Blog2şpng',
    title: 'Card 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis turpis ut mauris dictum, ac euismod mi varius.',
  },
  
];

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Home;
