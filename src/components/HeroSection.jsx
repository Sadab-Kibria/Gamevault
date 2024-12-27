import gif3 from "../assets/gif3.gif";
import gif2 from "../assets/gif2.gif";
import gif1 from "../assets/gif1.gif";
import { AnimatePresence,motion, spring} from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20"
    >
      <AnimatePresence>
      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold"
          initial={{ translateX:-400 }}
          animate={{ translateX:0 }}
          exit={{translateX:0}}
          transition={{duration:.7,ease:"easeInOut",type:spring}}>
         Unlock Your 
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text animate-pulse ">
          {" "}
          Gaming Legacy
        </span>
      </motion.h1>
      
      <motion.p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl overflow-hidden"
      initial={{ translateX:400 }}
      animate={{ translateX:0 }}
      exit={{translateX:0}}
      transition={{duration:.5,ease:"easeInOut",type:spring}}
      >
        Share your stats, showcase gameplay highlights, and connect with gamers worldwide.
         Build your profile, rise in the leaderboards, and make every achievement unforgettable!
      </motion.p>
      
      <div className="flex justify-center my-10">
        <motion.a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-600 py-3 px-4 mx-3 rounded-md duration-150 hover:text-black"
          initial={{ scale:0 }}
          animate={{ scale:1 }}
          transition={{duration:.2,delay:.4}}
          exit={{ scale:1 }}
        >
          Start for free
        </motion.a>
        <motion.a href="#" className="py-3 px-4 mx-3 rounded-md border duration-150 hover:text-orange-600 hover:border-orange-600"
              initial={{ scale:0 }}
              animate={{ scale:1 }}
              transition={{duration:.2,delay:.6}}
              exit={{ scale:1 }}
        >
          Documentation
        </motion.a>
      </div>
      <div className="hidden lg:flex  mt-10 justify-center ">
        <motion.div className="flex mt-10 justify-center w-full">
        <img src={gif1} alt="Gif" className="hidden rounded-lg border border-orange-700 shadow-sm shadow-red-400 mx-2 my-4 overflow-hidden lg:block"/>
      </motion.div>
      <motion.div className="flex mt-10 justify-center w-full">
        <img src={gif2} alt="Gif" className="hidden rounded-lg border border-orange-700 shadow-sm shadow-red-400 mx-2 my-4 overflow-hidden lg:block"/>
      </motion.div>
      </div>
      <motion.div className="flex mt-10 justify-center ">
        <img src={gif3} alt="Gif" className="block rounded-lg w-full border border-orange-700 shadow-sm shadow-red-400 mx-2 my-4 overflow-hidden lg:hidden"/>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
