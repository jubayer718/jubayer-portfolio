import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='mt-8 flex items-center  gap-8 text-2xl'>
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Linkedin'
      >
        <FaLinkedin></FaLinkedin>
      </a>
      <a
        href="https://www.twitter.com/in/your-twitter-profile"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
      >
     <FaTwitter></FaTwitter>
      </a>
      <a
        href="https://www.github.com/in/your-github-profile"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Github'
      >
      <FaGithub></FaGithub>
      </a>
      <a
        href="https://www.facebook.com/in/your-facebook-profile"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
      >
      <FaFacebook></FaFacebook>
      </a>
    
    </div>
  );
};

export default Social;