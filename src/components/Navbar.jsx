import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import {motion} from 'framer-motion'
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <img className="h-10 w-10 mr-2 duration-150" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight hover:text-orange-600 duration-150">GameVault</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li key={index}
               initial={{opacity:0,scale:0}}
               animate={{opacity:1,scale:1}}
               transition={{delay:0.4+index*0.2}}
              >
                <a className="duration-150 hover:text-orange-600" href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md duration-150 hover:text-orange-600 hover:border-orange-600">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-red-600 py-2 px-3   rounded-md hover:text-black duration-150"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <motion.li key={index} className="py-4"
                initial={{opacity:0,translateY:50}}
                whileInView={{opacity:1,translateY:0}}
                viewport={{once:true}}
                transition={{duration:.2,delay:.1+index*.05}}>
                  <a className="duration-150 hover:text-orange-600" href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <motion.a href="#" className="ease-linear py-2 px-3 border rounded-md duration-150 hover:text-orange-600 hover:border-orange-600"
                initial={{opacity:0,translateY:50}}
                whileInView={{opacity:1,translateY:0}}
                viewport={{once:true}}
                transition={{duration:.1,delay:.5}}>
                Sign In
              </motion.a>
              <motion.a
                href="#"
                className="ease-linear py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-red-600  hover:text-black duration-150"
                initial={{opacity:0,translateY:50}}
                whileInView={{opacity:1,translateY:0}}
                viewport={{once:true}}
                transition={{duration:.1,delay:.5}}
              >
                Create an account
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
