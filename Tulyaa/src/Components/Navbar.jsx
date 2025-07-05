import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Categories', href: '#Category' },
  { name: 'About us', href: '#About' },
  { name: 'Customer Review', href: '#CostumerReviews' },
  { name: 'Contact Us', href: '#Contact' }
];

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { ease: 'easeInOut' }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="bg-stone-300 shadow-sm border-b border-gray-100 fixed w-full top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center"
            id='logo'
          >
            <img 
              src="/tulogo.png" 
              alt="Tulyaa Logo" 
              className="h-32 w-auto object-contain"
            />
          </motion.div>
          </a>
          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center space-x-6"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="group relative"
                variants={navItemVariants}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-lg font-semibold cursor-pointer whitespace-nowrap text-[#111] relative"
                >
                  {item.name}
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#4b6f6b] to-[#07484A] 
                    transition-all duration-300 ease-out group-hover:w-full"
                  />
                </a>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Hamburger Button */}
          <div className="block lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#07484A] hover:bg-gray-100 rounded-md transition"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed top-24 right-0 w-64 bg-white shadow-lg border border-gray-100 rounded-l-lg z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#07484A] text-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
