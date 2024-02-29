import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className='footer mt-0 pt-0'>
      <hr className='border-slate-200 mt-0 pt-0' />
      <div className="flex flex-col md:flex-row justify-between bg-gray-800 text-white p-5 md:p-10 rounded-t-md shadow-md">
        <p className="mb-4 md:mb-0">
          &copy; 2024 <span className='font-semibold'>Sumit Kumar Jhaldiyal</span> | All rights reserved.
        </p>
        <div className='flex flex-row space-x-4'>
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialLink.iconUrl}
                alt={socialLink.name}
                className='w-6 h-6 md:w-8 md:h-8 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
