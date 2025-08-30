import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUp, Settings, X } from 'lucide-react';

interface FloatingControlsProps {
  showScrollProgress?: boolean;
  showThemeToggle?: boolean;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({
  showScrollProgress = true,
  showThemeToggle = true
}) => {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeControl, setActiveControl] = useState<'scroll' | 'theme' | null>(null);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.round((scrollTop / scrollHeight) * 100);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.style.background = '#111827';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = '#ffffff';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const size = 55;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * (size / 2 - strokeWidth);
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
          {/* Expanded Controls */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-col space-y-3"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, staggerChildren: 0.05 }}
              >
                {/* Theme Toggle */}
                {showThemeToggle && (
                  <motion.button
                    className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <motion.div
                      key={isDark ? 'moon' : 'sun'}
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isDark ? (
                        <Moon className="h-5 w-5" />
                      ) : (
                        <Sun className="h-5 w-5" />
                      )}
                    </motion.div>
                  </motion.button>
                )}

                {/* Scroll to Top */}
                {showScrollProgress && (
                  <motion.button
                    className="w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Control Button */}
          <motion.div
            className="relative cursor-pointer group"
            style={{ width: size, height: size }}
            onClick={() => setIsExpanded(!isExpanded)}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              duration: 0.3
            }}
          >
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-700 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300" />
            
            {/* Progress Circle (if scroll progress is enabled) */}
            {showScrollProgress && (
              <svg
                className="absolute inset-0 transform -rotate-90"
                width={size}
                height={size}
              >
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={size / 2 - strokeWidth}
                  stroke="rgba(75, 85, 99, 0.3)"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                
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
                
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <X className="h-6 w-6 text-white" />
                ) : showScrollProgress ? (
                  <span className="text-xs font-semibold text-white">
                    {scrollProgress}%
                  </span>
                ) : (
                  <Settings className="h-6 w-6 text-white" />
                )}
              </motion.div>
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
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingControls;