import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowUp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaIndustry,
  FaCertificate
} from 'react-icons/fa';
import logo from '../assets/logo-Photoroom.svg';
import isologo from '../assets/iso.png';
import makeinindialogo from '../assets/makeinindia.png';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = (type, value) => {
    switch(type) {
      case 'email':
        navigator.clipboard.writeText(value);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
        break;
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      default:
        break;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      text: (
        <>
          Gat No. 164/2-A & B, Near Samsonite Factory,<br />
          A/p. Gonde Dumala, Tal. Igatpuri,<br />
          Dist. Nashik, Maharashtra – 422403
        </>
      ),
      action: null,
      className: "text-sm leading-relaxed cursor-default"
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+91 9423968288",
      action: () => handleContact('phone', '+919423968288'),
      className: "hover:text-red-300 cursor-pointer"
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+91 8983028645",
      action: () => handleContact('phone', '+918983028645'),
      className: "hover:text-red-300 cursor-pointer"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "shivkrupatechnoplast@gmail.com",
      action: () => handleContact('email', 'shivkrupatechnoplast@gmail.com'),
      className: "hover:text-red-300 cursor-pointer relative"
    }
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/infrastructure-machinery", label: "Infrastructure" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.img 
                  src={logo} 
                  alt="Shivkrupa Technoplast Logo" 
                  className="h-12 w-auto"
                  whileHover={{ 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.6 }
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    Shivkrupa
                  </span>
                  <span className="text-sm text-red-400 font-medium">Technoplast</span>
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pioneering excellence in plastic injection molding with cutting-edge technology 
                and sustainable manufacturing practices.
              </p>
            </div>
          </motion.div>

              {/* Certifications */}
              <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
             
              <motion.div 
               
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                
              >
                <img 
                  src={isologo} 
                  alt="ISO 9001:2015 Certified" 
                  className="h-16 w-auto mx-auto object-contain"
                />
                <p className="text-xs text-gray-400 text-center mt-2">
                  ISO 9001:2015 Certified
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="mt-4"
              >
                <img 
                  src={makeinindialogo} 
                  alt="Make in India" 
                  className="h-16 w-auto mx-auto object-contain"
                />
                <p className="text-xs text-gray-400 text-center mt-2">
                  Make in India
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FaIndustry className="w-4 h-4 mr-2 text-red-400" />
                Quick Links
              </h3>
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2 text-red-400" />
                Contact Info
              </h3>
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-start space-x-2 ${item.className}`}
                  whileHover={{ x: 4 }}
                  onClick={item.action}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="w-8 h-6 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0  backdrop-blur-sm"
                  >
                    <div className="text-red-400">
                      {item.icon}
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                    {index === contactItems.length - 1 && (
                      <AnimatePresence>
                        {emailCopied && (
                          <motion.span
                            className="absolute mt-1 text-xs text-green-400 font-medium bg-green-900/30 px-2 py-1 rounded border border-green-400/30 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            Email copied!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

      
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Shivkrupa Techno-Plast Pvt. Ltd. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Precision Plastic Injection Molding Solutions
              </p>
            </div>
            
            <motion.button
              className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-lg"
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;