import React from 'react';
import Social from '../../Shared/social/Social';
import profilePic from '../../assets/profilePic.png'
import { FaDownload } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap items-center lg:flex-row-reverse'>
        <div className='w-full  lg:w-1/2'>
          <div className='flex justify-center lg:P-8'>
            <img src={profilePic} alt="jubayer ahmed" className='h-72 w-64   border-2 border-stone-900 rounded-3xl grayscale filter' />

          </div>

        </div>
        <div className='w-full  lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mt-10 '>
            <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl text-nowrap '>Jubayer Ahmed</h2>
            <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'> Junior Web Developer</span>
            <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>Junior Web Developer | Skilled in HTML, CSS, JavaScript | Exploring React & Node.js for Full-Stack Development</p>
            <a
              href="/resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 flex items-center  gap-2'
            >Download Resume <MdOutlineFileDownload className='text-lg' /></a>
            
           <Social></Social>
          </div>
        </div>
     
      </div>

    </div>
  );
};

export default Hero;