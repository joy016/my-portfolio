import './App.css';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Footer />
      <motion.div
        className="fixed left-0 right-0 h-2 bg-purple-500 bottom-10"
        style={{ scaleX }}
      />
    </>
  );
}

export default App;
