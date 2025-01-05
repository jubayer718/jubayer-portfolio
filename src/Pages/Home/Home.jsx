import React from 'react';
import Hero from '../../components/Hero/Hero';
import Technologies from '../../components/Technologies/Technologies';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div className=''>
      <Hero></Hero>
      <Technologies></Technologies>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;