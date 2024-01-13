
import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  title: string;
  content: string;
}

const CardBlog: React.FC<CardProps> = ({ imageUrl, title, content }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
        <Link href="/blog">
          <p className='text-blue-700'> Indi oxu</p>  
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;