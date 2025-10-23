import React from 'react';
import { motion } from 'framer-motion';

const Differentiators = ({ differentiators }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
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
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Key <span className="text-red-600">Differentiators</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-red-600 mx-auto mb-6"
          />
        </motion.div>
        
        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors duration-300 mx-auto"
              >
                <div className="text-red-600">
                  {item.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Hover Indicator */}
              <div className="w-0 group-hover:w-8 h-0.5 bg-red-600 mx-auto mt-4 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Experience the difference that precision engineering and unwavering quality standards can make for your business.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;