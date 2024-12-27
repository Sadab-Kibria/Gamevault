import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { AnimatePresence,motion} from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
      <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{duration:.5}}
             exit={{ opacity: 0 }}
             >
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
