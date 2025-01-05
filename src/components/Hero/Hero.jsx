import React from 'react';
import Social from '../../Shared/social/Social';
import profilePic from '../../assets/profilePic.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion'
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}
const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap items-center lg:flex-row-reverse'>
        <div className='w-full  lg:w-1/2'>


          <div className='flex justify-center lg:P-8'>
            <motion.img
              src={profilePic}
              alt="jubayer ahmed"
              width={500}
              height={500}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className='  border-2 border-stone-900 rounded-3xl grayscale filter'

            />

          </div>

        </div>
        <div className='w-full  lg:w-1/2'>


          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10 '>
            <motion.h2
              variants={childVariant}
              className='pb-2 text-4xl tracking-tighter lg:text-8xl text-nowrap '>Jubayer Ahmed</motion.h2>
            <motion.span
              variants={childVariant}
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'> Junior Web Developer</motion.span>
            <motion.p
              variants={childVariant}
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>Junior Web Developer | Skilled in HTML, CSS, JavaScript | Exploring React & Node.js for Full-Stack Development</motion.p>
            <motion.a
              variants={childVariant}
              href="/resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 flex items-center  gap-2'
            >Download Resume <MdOutlineFileDownload className='text-lg' /></motion.a>

            <Social></Social>
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default Hero;