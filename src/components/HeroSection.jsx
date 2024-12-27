import video3 from "../assets/Asphalt.mp4";
import video4 from "../assets/Cod.mp4";
import { AnimatePresence,motion, spring} from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20"
     
    >
      <AnimatePresence>
      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold"
          initial={{ translateX:-400 }}
          animate={{ translateX:0 }}
          transition={{duration:.7,ease:"easeInOut",type:spring}}
          
      >
         Unlock Your 
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text animate-pulse ">
          {" "}
          Gaming Legacy
        </span>
      </motion.h1>
      
      <motion.p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl overflow-hidden"
      initial={{ translateX:400 }}
      animate={{ translateX:0 }}
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
      <div className="flex mt-10 justify-center relative"
      >
        <div className="absolute size-full inset-0 z-10"></div>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-red-400 mx-2 my-4 overflow-hidden"
            initial={{ translateY:400 }}
            animate={{ translateY:0 }}
            transition={{duration:.5}}
            exit={{ translateY:0 }}
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-red-400 mx-2 my-4 overflow-hidden"
            initial={{ translateY:400 }}
            animate={{ translateY:0 }}
            transition={{duration:.5}}
            exit={{ translateY:0 }}
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
