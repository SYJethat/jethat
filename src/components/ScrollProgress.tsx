import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollProgressProps {
  showPercentage?: boolean;
  size?: number;
  strokeWidth?: number;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ 
  showPercentage = true, 
  size = 55,
  strokeWidth = 3
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.round((scrollTop / scrollHeight) * 100);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const circumference = 2 * Math.PI * (size / 2 - strokeWidth);
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={progressRef}
          className="fixed bottom-4 right-6 z-50 cursor-pointer group"
          style={{ width: size, height: size }}
          onClick={scrollToTop}
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
          {/* Background Circle */}
          <div 
            className="absolute inset-0 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
            style={{
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)'
            }}
          />
          
          {/* Progress Circle */}
          <svg
            className="absolute inset-0 transform -rotate-90"
            width={size}
            height={size}
          >
            {/* Background track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - strokeWidth}
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            
            {/* Progress track */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - strokeWidth}
              stroke="url(#progressGradient)"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {showPercentage ? (
              <motion.span 
                className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors"
                key={scrollProgress}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {scrollProgress}%
              </motion.span>
            ) : (
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowUp className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors" />
              </motion.div>
            )}
          </div>
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0)',
                '0 0 0 8px rgba(59, 130, 246, 0.1)',
                '0 0 0 0 rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;