import { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`font-['Montserrat'] fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-black shadow-md py-4'
      }`}
    >
      <div className="container-custom px-4 mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src="newlogo.png" 
                alt="Logo" 
                className="h-16"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              />
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            {isMounted && navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link 
                  to={item.path} 
                  className="relative px-4 py-2 text-white text-lg font-bold group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
                
              </motion.div>
            ))} 
              {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9537619792?text=Hello%2C%20I'm%20interested%20in%20your%20services!" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp/>
      </a>
            {/* <motion.a
              href='tel:9537619792'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-300 text-white px-5 py-2 rounded-full font-bold text-lg shadow-lg"
            >
             9537619792
            </motion.a> */}
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden mt-4 rounded-xl backdrop-blur-lg bg-white/10 shadow-2xl"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * (index + 1) }}
                  >
                    <Link 
                      to={item.path} 
                      className="block text-white hover:text-blue-400 font-bold py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2 mt-2 border-t border-white/10"
                >
                  <a href='tel:9537619792' className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-700 transition-colors p-4">
                    Call 9537619792
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;