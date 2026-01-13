import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Show scroll to top button after 300px
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate circle progress (circumference = 2 * π * r, r = 45)
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Scroll to Top Button with Circular Progress */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollToTop ? 1 : 0, 
          scale: showScrollToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full cursor-pointer active:scale-95 transition-transform duration-200"
        title="Scroll to Top"
        disabled={!showScrollToTop}
      >
        {/* Circular Progress Background */}
        <svg 
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background Circle */}
          ircle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="2"
          /
          
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.1 }}
            strokeLinecap="round"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>

        {/* Button Background Gradient */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 z-10 hover:scale-110">
          {/* Arrow Icon */}
          <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>

        {/* Progress Percentage (Optional) */}
        <div className="absolute text-xs font-bold text-cyan-400 pointer-events-none">
          {Math.round(scrollProgress)}%
        </div>
      </motion.button>
    </>
  );
}
