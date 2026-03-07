import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Internal scroll links
  const internalLinks = ['Services', 'About', 'Portfolio', 'Testimonials'];

  // External links
  const externalLinks = [
    { label: 'Attendance', href: 'https://attandance-rho.vercel.app' },
    { label: 'Academy', href: 'https://vercitty-academy.vercel.app' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0118]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_32px_0_rgba(139,92,246,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-2">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-[#0a0118] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Vercitty Logo"
                  className="w-9 h-9 md:w-12 md:h-12 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Internal scroll links */}
            {internalLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-purple-200/80 hover:text-white transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* External links — Attendance & Academy same style as internal links */}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-200/80 hover:text-white transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white flex-shrink-0"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 py-3 border-t border-purple-500/20"
          >
            <div className="flex flex-col gap-3">
              {/* Internal scroll links */}
              {[...internalLinks, 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-purple-200/80 hover:text-white transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}

              {/* External links in mobile menu */}
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200/80 hover:text-white transition-colors duration-300 text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}