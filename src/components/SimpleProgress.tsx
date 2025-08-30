import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleProgress: React.FC = () => {
  const [run, setRun] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setRun(prev => !prev);
      
      const pos = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);
      
      setScrollProgress(scrollValue);
      setIsVisible(pos > 100);
    };

    const handleLoad = () => {
      setRun(prev => !prev);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progressRef.current && valueRef.current) {
      const scrollProgress = progressRef.current;
      const progressValue = valueRef.current;
      
      // Apply conic gradient background with Digital Dusk colors
      scrollProgress.style.background = `conic-gradient(#5d6bff ${scrollProgress}%, #334155 ${scrollProgress}%)`;
      
      // Update text content
      progressValue.innerText = `${scrollProgress}%`;
    }
  }, [run, scrollProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={progressRef}
          className="fixed bottom-4 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 cursor-pointer shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          onClick={scrollToTop}
          style={{
            background: `conic-gradient(#5d6bff ${scrollProgress}%, #334155 ${scrollProgress}%)`,
            boxShadow: '0 0 15px rgba(93, 107, 255, 0.4)'
          }}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 10,
            duration: 0.3
          }}
        >
          <motion.div
            ref={valueRef}
            className="w-11 h-11 bg-dusk-900 dark:bg-dusk-800 rounded-full flex items-center justify-center text-white text-xs font-semibold"
            key={scrollProgress}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {scrollProgress}%
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default SimpleProgress;