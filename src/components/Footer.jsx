import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import {motion} 
from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li key={index}
              initial={{opacity:0,translateY:50}}
              whileInView={{opacity:1,translateY:0}}
              viewport={{once:true}}
              transition={{duration:.2,delay:.3+index*.1}}
              >
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                  
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li key={index}
              initial={{opacity:0,translateY:50}}
              whileInView={{opacity:1,translateY:0}}
              viewport={{once:true}}
              transition={{duration:.2,delay:.3+index*.1}}
                  > 
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                  
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li key={index}
              initial={{opacity:0,translateY:50}}
              whileInView={{opacity:1,translateY:0}}
              viewport={{once:true}}
              transition={{duration:.2,delay:.3+index*.1}}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center  mt-12 lg:mt-24">
        
        <h1 className="cursor-pointer">&copy; <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text animate-pulse">Sadab Kibria</span> | 2024</h1>
      </div>
    </footer>
  );
};

export default Footer;
