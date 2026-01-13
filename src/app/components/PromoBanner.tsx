import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was closed today
    const lastClosed = localStorage.getItem('promoBannerClosed');
    const today = new Date().toDateString();

    if (lastClosed !== today) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store today's date
    const today = new Date().toDateString();
    localStorage.setItem('promoBannerClosed', today);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4"
        >
          {/* Banner Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 p-0.5 shadow-2xl">
            {/* Inner Content */}
            <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#0f051a] px-6 md:px-8 py-4 md:py-6 rounded-2xl">
              
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-between gap-4 md:gap-6">
                {/* Left Side - Offer */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🔥</span>
                    <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                      Limited Time Offer!
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-purple-100/90">
                    Get <span className="font-bold text-cyan-300">20% OFF</span> on Web Development Services
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs md:text-sm text-purple-200/70">
                      Use code: <span className="font-bold text-cyan-300">VERCITTY20</span>
                    </span>
                  </div>
                </div>

                {/* Right Side - CTA Button & Close */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      handleClose();
                    }}
                    className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white text-sm md:text-base hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 whitespace-nowrap"
                  >
                    Claim Now
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                    title="Close"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-purple-200 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
