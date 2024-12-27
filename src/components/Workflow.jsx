import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import Raiden from "../assets/raiden.png";
import {motion, 
  spring, 
  useInView, 
  useMotionValueEvent, 
  useScroll, 
  useTransform} 
from "framer-motion"

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 lg:mb-32 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r  from-orange-500 to-red-600 text-transparent bg-clip-text">
          gaming strategy.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-8 w-full lg:w-1/2 ">
          <img src={Raiden} alt="Crysis" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div key={index} className="flex mb-12"
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{delay:0+index*0.1}}
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
