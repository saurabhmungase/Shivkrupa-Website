import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About <strong className="text-red-400">Shivkrupa Techno-Plast</strong>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Pioneering Excellence in Plastic Injection Molding
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
