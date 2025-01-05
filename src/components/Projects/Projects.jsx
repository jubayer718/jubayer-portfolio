import React from 'react';
import UseCart from '../../Shared/useCart/UseCart';
import { motion } from 'framer-motion';
const Projects = () => {
  const [cart] = UseCart();
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        
        className="text-4xl my-20 text-center">Projects</motion.h2>
   
      <div>
        {
          cart.map((project,index) => 
            <div key={project._id} className='mb-8 flex flex-wrap lg:justify-center'>
              < motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{duration:1}}
                className='w-ful lg:w-1/4'>
                <img src={project.image}
                
                  alt={project.title}
                  className='mb-6 rounded h-80 w-60 object-cover'
                  
                />

              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'>
                <h3 className='mb-2 font-semibold text-2xl '>{ project.title}</h3>
                <p className='mb-2 text-stone-400'>{project.description}</p>
                {project.technologies.map((tech, idx) => 
                  <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={idx}>{ tech}</span>
                )
                
                }
              </motion.div>

            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;