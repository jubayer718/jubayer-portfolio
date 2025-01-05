import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl"> Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <ImHtmlFive className="text-7xl text-red-500"/>
        </div>
           <div>
          <SiTailwindcss  className="text-7xl text-cyan-600"/>
        </div>
        <div>
          <RiReactjsLine className="text-7xl text-cyan-500"></RiReactjsLine>
        </div>
     
        <div className="p-4">
          <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
        </div>
        <div>
          <SiMongodb className="text-7xl text-cyan-500"></SiMongodb>
        </div>
        <div className="p-4">
         <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>

        </div>
      </div>
     
    </div>
  );
};

export default Technologies;