import React from 'react';
import UseCart from '../../Shared/useCart/UseCart';

const Projects = () => {
  const [cart] = UseCart();
  return (
    <div className='pb-4'>
      <h2 className="text-4xl my-20 text-center">Projects</h2>
   
      <div>
        {
          cart.map((project,index) => 
            <div key={project._id} className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-ful lg:w-1/4'>
                <img src={project.image}
                
                  alt={project.title}
                  className='mb-6 rounded h-80 w-60 object-cover'
                  
                />

              </div>
              <div className='w-full max-w-xl lg:w-3/4'>
                <h3 className='mb-2 font-semibold text-2xl '>{ project.title}</h3>
                <p className='mb-2 text-stone-400'>{project.description}</p>
                {project.technologies.map((tech, idx) => 
                  <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={idx}>{ tech}</span>
                )
                
                }
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;