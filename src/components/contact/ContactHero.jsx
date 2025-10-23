import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact <strong className="text-red-400">Shivkrupa</strong>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Let's discuss how we can help with your plastic injection molding needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;