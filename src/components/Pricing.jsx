import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import {motion, 
  spring, 
  useInView, 
  useMotionValueEvent, 
  useScroll, 
  useTransform} 
from "framer-motion";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap"
      >
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            <motion.div className="p-10 border border-neutral-700 rounded-xl hover:bg-neutral-800 duration-150"
            initial={{scaleY:0}}
            whileInView={{scaleY:1}}
            viewport={{once:true}}
            transition={{delay:.1,duration:.1}}>
              <motion.p className="text-4xl mb-8"
              initial={{opacity:0,translateX:50}}
              whileInView={{opacity:1,translateX:0}}
              viewport={{once:true}}
              transition={{duration:.3,delay:.2}}>
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </motion.p>
              <motion.p className="mb-8"
              initial={{opacity:0,translateX:50}}
              whileInView={{opacity:1,translateX:0}}
              viewport={{once:true}}
              transition={{duration:.5,delay:.3}}>
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </motion.p>
              <ul>
                {option.features.map((feature, index) => (
                  <motion.li key={index} className="mt-8 flex items-center overflow-hidden"
                  initial={{opacity:0,translateX:50}}
                  whileInView={{opacity:1,translateX:0}}
                  viewport={{once:true}}
                  transition={{duration:.5,delay:.5+index*.1}}>
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-700 border border-orange-800 rounded-lg transition duration-200"
                initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  viewport={{once:true}}
                  transition={{delay:1.3}}
              >
                Subscribe
              </motion.a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
