import React from 'react';
import { motion } from 'framer-motion';
import { FaImages, FaEye, FaDownload } from 'react-icons/fa';
import MergeImage from '../MergeImage';

const ProductGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        duration: 0.7
      }
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
    }
  };

  const features = [
    {
      icon: <FaEye className="w-6 h-6" />,
      title: "High Precision",
      description: "Micron-level accuracy in every component"
    },
    {
      icon: <FaImages className="w-6 h-6" />,
      title: "Diverse Applications",
      description: "Components for various industries"
    },
    {
      icon: <FaDownload className="w-6 h-6" />,
      title: "Quality Assured",
      description: "IATF 16949 certified quality standards"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3"
          >
            Our Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Product <span className="text-red-600">Gallery</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-red-600 mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our precision-engineered plastic components and injection molding solutions 
            that power industries with quality and reliability.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
            >
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300"
              >
                <div className="text-red-600">
                  {feature.icon}
                </div>
              </motion.div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Component */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <MergeImage />
        </motion.div>

  
      </div>
    </section>
  );
};

export default ProductGallery;