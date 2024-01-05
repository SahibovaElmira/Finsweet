import React from 'react';
import ListenNowButton from './Listen/page';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="px-2 py-2 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center">
        <img className="w-20 h-20 mr-2" src={imageUrl} alt={title} />
        <div>
          <div className="font-inter text-xl font-semibold leading-7 tracking-normal text-left">{title}</div>
          <p className="text-orange-500 leading-6 tracking-normal text-left p-4"> ★★★★★</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-base font-normal leading-6 tracking-normal text-left">{content}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1  border-t-2  border-blue-500"></div>
      </div>
    </div>
  );
};

export default ProjectCard;



