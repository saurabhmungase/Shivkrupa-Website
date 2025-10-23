import React from 'react';
import { motion } from 'framer-motion';
import {
  FaIndustry,
  FaShieldAlt,
  FaLeaf,
  FaBolt,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  GiFactory,
} from 'react-icons/gi';

const FacilityFeatures = () => {
  const facilityFeatures = [
    {
      text: "1000 KVA Electric Power Supply",
      description: "Uninterrupted power for continuous production",
      icon: <FaBolt className="w-8 h-8" />,
      category: "Power Infrastructure"
    },
    {
      text: "Eco-friendly Working Area",
      description: "Sustainable manufacturing practices",
      icon: <FaLeaf className="w-8 h-8" />,
      category: "Environment"
    },
    {
      text: "Modern Industrial Infrastructure",
      description: "State-of-the-art facility design",
      icon: <GiFactory className="w-8 h-8" />,
      category: "Infrastructure"
    },
    {
      text: "Quality Assurance Systems",
      description: "Comprehensive quality control processes",
      icon: <FaCheckCircle className="w-8 h-8" />,
      category: "Quality"
    },
    {
      text: "Advanced Safety Measures",
      description: "ISO-certified safety protocols",
      icon: <FaShieldAlt className="w-8 h-8" />,
      category: "Safety"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
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
            Advanced Facilities
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Facility <span className="text-red-600">Highlights</span>
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
            World-class infrastructure and systems designed to ensure optimal performance, 
            quality, and sustainability in every aspect of our manufacturing operations.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {facilityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 p-6 text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300"
              >
                <div className="text-red-600">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-red-50 group-hover:text-red-700 transition-colors duration-300">
                  {feature.category}
                </span>
              </div>

              {/* Feature Text */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                {feature.text}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="w-full h-full bg-white rounded-xl m-0.5" />
              </div>

              {/* Hover Indicator */}
              <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 group-hover:w-8 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Facility Capabilities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our facility integrates advanced technology with sustainable practices to deliver 
              precision manufacturing while maintaining the highest standards of safety and quality.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "24/7", label: "Operations" },
                { value: "ISO", label: "Certified" },
                { value: "100%", label: "Quality Focus" },
                { value: "Eco", label: "Friendly" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  className="text-center p-4"
                >
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilityFeatures;