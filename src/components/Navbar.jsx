import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiInfo, FiMail, FiSettings } from 'react-icons/fi';
import { FaIndustry, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import logo1 from '../assets/logo-Photoroom.svg'; 

const Navbar = ({ logo = logo1, companyName = "SHIVKRUPA" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <FiInfo className="w-5 h-5" /> },
    { name: "Services", path: "/services", icon: <FiSettings className="w-5 h-5" /> },
    { name: "Infrastructure", path: "/infrastructure-machinery", icon: <FaIndustry className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <FiMail className="w-5 h-5" /> }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+91 9423968288", 
      href: "tel:+919423968288"
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+91 8983028645",
      href: "tel:+918983028645"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "shivkrupatechnoplast@gmail.com",
      href: "mailto:shivkrupatechnoplast@gmail.com"
    }
  ];

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Close mobile menu when route changes and scroll to top
  useEffect(() => {
    setIsOpen(false);
    scrollToTop();
  }, [location, scrollToTop]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenuAndScroll = useCallback(() => {
    setIsOpen(false);
    scrollToTop();
  }, [scrollToTop]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isOpen]);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const staggerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Check if a path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2 border-b border-gray-100' 
            : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-3 group outline-none"
              aria-label="Home"
              onClick={scrollToTop}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <motion.img 
                  src={logo} 
                  alt={`${companyName} Logo`} 
                  className="h-10 sm:h-12 w-auto transition-all duration-300"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.6 }
                  }}
                  loading="eager"
                />
                <div className="flex flex-col">
                  <motion.span 
                    className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {companyName}
                  </motion.span>
                  <motion.div 
                    className="h-0.5 w-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = isActivePath(item.path);
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg group ${
                      isActive 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50/50'
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={scrollToTop}
                    onMouseEnter={() => setActiveHover(item.path)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.span
                        animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.name}</span>
                    </div>
                    
                    {(isActive || activeHover === item.path) && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"
                        layoutId="navUnderline"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="h-6 w-6 text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="h-6 w-6 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Separate from main nav for better z-index control */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* High z-index backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
              onClick={closeMenuAndScroll}
              role="presentation"
            />
            
            {/* Reduced width mobile menu panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl border-l border-gray-200 flex flex-col z-[9999] md:hidden overflow-hidden"
            >
              {/* Header - Compact */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <NavLink 
                  to="/" 
                  className="flex items-center space-x-2 group"
                  onClick={closeMenuAndScroll}
                >
                  <img 
                    src={logo} 
                    alt={`${companyName} Logo`} 
                    className="h-8 w-auto"
                    loading="eager"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {companyName}
                    </span>
                    <div className="h-0.5 w-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                  </div>
                </NavLink>
                
                <motion.button
                  onClick={closeMenuAndScroll}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FiX className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>
              
              {/* Navigation Items - Compact */}
              <nav className="flex-1 overflow-y-auto">
                <motion.div 
                  className="p-4"
                  variants={staggerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <motion.h3 
                    className="text-base font-semibold text-gray-900 mb-4 flex items-center"
                    variants={itemVariants}
                  >
                    <div className="w-1 h-5 bg-red-500 rounded-full mr-2"></div>
                    Navigation
                  </motion.h3>
                  
                  <motion.ul 
                    className="space-y-2"
                    variants={staggerVariants}
                  >
                    {navItems.map((item) => {
                      const isActive = isActivePath(item.path);
                      return (
                        <motion.li key={item.path} variants={itemVariants}>
                          <NavLink
                            to={item.path}
                            className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 group border ${
                              isActive 
                                ? 'bg-red-50 text-red-600 border-red-200 shadow-sm' 
                                : 'text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-100 border-transparent'
                            }`}
                            onClick={closeMenuAndScroll}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <motion.div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isActive 
                                  ? 'bg-red-100 text-red-600' 
                                  : 'bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-red-600'
                              } transition-all duration-300`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.icon}
                            </motion.div>
                            <div className="flex-1">
                              <span className="font-semibold">{item.name}</span>
                              {isActive && (
                                <motion.div 
                                  className="w-full h-0.5 bg-red-500 rounded-full mt-1"
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </div>
                          </NavLink>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  {/* Contact Section - Compact */}
                  <motion.div 
                    className="mt-8"
                    variants={itemVariants}
                  >
                    <motion.h3 
                      className="text-base font-semibold text-gray-900 mb-4 flex items-center"
                      variants={itemVariants}
                    >
                      <div className="w-1 h-5 bg-red-500 rounded-full mr-2"></div>
                      Contact Info
                    </motion.h3>
                    
                    <div className="space-y-3">
                      {contactInfo.map((contact, index) => (
                        <motion.a
                          key={index}
                          href={contact.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                          variants={itemVariants}
                          onClick={closeMenuAndScroll}
                        >
                          <div className="w-8 h-8 rounded-md bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors duration-300">
                            {contact.icon}
                          </div>
                          <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 break-all">
                            {contact.text}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </nav>

              {/* Footer - Compact */}
              <motion.div 
                className="p-4 border-t border-gray-200 bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-600 text-xs text-center mb-1">
                  Precision Plastic Manufacturing
                </p>
                <p className="text-gray-500 text-xs text-center">
                  © {new Date().getFullYear()} {companyName}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  companyName: PropTypes.string
};

export default React.memo(Navbar);