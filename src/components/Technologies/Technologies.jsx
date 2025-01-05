import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { animate, motion } from "framer-motion"
const iconVariants = (duration) =>( {
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    }
  }
})

const Technologies = () => {


  return (
    <div className="pb-24">
      < motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          
          <ImHtmlFive className="text-7xl text-red-500"/>
        </motion.div>
        <motion.div
         initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <SiTailwindcss  className="text-7xl text-cyan-600"/>
        </motion.div>
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <RiReactjsLine className="text-7xl text-cyan-500"></RiReactjsLine>
        </motion.div>
     
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          
          className="p-4">
          <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
        </motion.div>
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <SiMongodb className="text-7xl text-cyan-500"></SiMongodb>
        </motion.div>
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4">
         <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>

        </motion.div>
      </motion.div>
     
    </div>
  );
};

export default Technologies;