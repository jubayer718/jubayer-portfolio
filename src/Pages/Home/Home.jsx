import React from 'react';
import Hero from '../../components/Hero/Hero';
import Technologies from '../../components/Technologies/Technologies';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
    <div className=''>
      <Hero></Hero>
      <Technologies></Technologies>
      <Projects></Projects>
    </div>
  );
};

export default Home;