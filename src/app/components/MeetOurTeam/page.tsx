import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'Orxan Salahlı',
      role: 'Fotoqraf',
      imageSrc: '/About/About3.png',
      socialLinks: {
        facebook: 'https://www.facebook.com/?locale=ru_RU',
        twitter: 'https://twitter.com/?lang=ru',
        linkedin: 'https://ru.linkedin.com/',
      },
    },
    {
      name: 'Sarxan Əzimi',
      role: 'Tədqiqatçı',
      imageSrc: '/About/About4.png',
      socialLinks: {
        facebook: 'https://www.facebook.com/?locale=ru_RU',
        twitter: 'https://twitter.com/?lang=ru',
        linkedin: 'https://ru.linkedin.com/',
      },
    },
    {
      name: 'Elmira Sahibova',
      role: 'Proqramist',
      imageSrc: '/About/About 5.png',
      socialLinks: {
        facebook: 'https://www.facebook.com/?locale=ru_RU',
        twitter: 'https://twitter.com/?lang=ru',
        linkedin: 'https://ru.linkedin.com/',
      },
    },
    {
      name: 'Ayaz Qasımov',
      role: 'Müxbir',
      imageSrc: '/About/About 6.png',
      socialLinks: {
        facebook: 'https://www.facebook.com/?locale=ru_RU',
        twitter: 'https://twitter.com/?lang=ru',
        linkedin: 'https://ru.linkedin.com/',
      },
    },
    // Add more team members similarly
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center mb-8 md:mb-0">
          <Image src={member.imageSrc} alt={member.name} width={308} height={302} />
          <h2 className="font-inter text-xl md:text-2xl font-bold leading-7 md:leading-9 tracking-normal text-left mt-2 md:mt-4">
            {member.name}
          </h2>
          <p className="font-inter text-sm md:text-base font-normal leading-5 md:leading-6 tracking-normal text-left opacity-70 mt-1">
            {member.role}
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-blue-600 mt-2 md:mt-4">
            <Link href={member.socialLinks.facebook}>
              <FaFacebook />
            </Link>
            <Link href={member.socialLinks.twitter}>
              <FaTwitter />
            </Link>
            <Link href={member.socialLinks.linkedin}>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetOurTeam;
