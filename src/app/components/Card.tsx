

import React from 'react';
import ListenNowButton from './Listen/page';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-auto" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-inter text-xl font-semibold leading-7 tracking-normal text-left">{title}</div>
        <p className="text-base font-normal leading-6 tracking-normal text-left">{content}</p>
        <ListenNowButton/>
        
      </div>
        </div>
  );
};

export default Card;

