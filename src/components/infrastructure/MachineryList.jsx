import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaIndustry, FaBolt, FaMicrochip } from 'react-icons/fa';
import machin from '../../assets/machinpng.png';
import ImageLoader from '../shared/ImageLoader';

const MachineryList = () => {

  const injectionMoldingMachines = [
    { model: "IMM-2000 T", quantity: "01 No", make: "MILACRON (Ferromatic)", capacity: "2000 Tons" },
    { model: "IMM-1300 T", quantity: "01 No", make: "MILACRON (Ferromatic)", capacity: "1300 Tons" },
    { model: "IMM-1200 T", quantity: "01 No", make: "MILACRON (Ferromatic)", capacity: "1200 Tons" },
    { model: "IMM-910 T", quantity: "01 No", make: "MILACRON (Ferromatic)", capacity: "910 Tons" },
    { model: "IMM-850 T", quantity: "03 Nos", make: "Windsor", capacity: "850 Tons" },
    { model: "IMM-660 T", quantity: "02 Nos", make: "MILACRON (Ferromatic)", capacity: "660 Tons" },
    { model: "IMM-450 T", quantity: "02 Nos", make: "MILACRON (Ferromatic)", capacity: "450 Tons" },
    { model: "IMM-350 T", quantity: "01 No", make: "MILACRON (Ferromatic)", capacity: "350 Tons" },
    { model: "IMM-250 T", quantity: "02 Nos", make: "MILACRON (Ferromatic)", capacity: "250 Tons" },
  ];


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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
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

  // Calculate total machines
  const totalMachines = injectionMoldingMachines.reduce((total, machine) => {
    return total + parseInt(machine.quantity);
  }, 0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
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
            Advanced Machinery
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Precision <span className="text-red-600">Injection Molding</span> Machines
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
            State-of-the-art injection molding equipment ensuring precision, efficiency, and consistent quality for every production run.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: <FaCogs className="w-6 h-6" />, value: totalMachines.toString(), label: "Total Machines" },
            { icon: <FaBolt className="w-6 h-6" />, value: "2000T", label: "Max Capacity" },
            { icon: <FaMicrochip className="w-6 h-6" />, value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 text-center group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300"
                variants={iconVariants}
              >
                <div className="text-red-600">
                  {stat.icon}
                </div>
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Machines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {injectionMoldingMachines.map((machine, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ImageLoader
                      src={machin}
                      alt="Machine icon"
                      className="w-6 h-6 filter grayscale-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      showLoader={false}
                      sizes="24px"
                    />
                  </motion.div>
                  
                  {/* Quantity Badge */}
                  <motion.span 
                    className="px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded-full border border-red-200 group-hover:bg-red-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {machine.quantity}
                  </motion.span>
                </div>

                {/* Machine Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {machine.model}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <span className="text-sm font-medium mr-2">Make:</span>
                      <span className="text-gray-700">{machine.make}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <span className="text-sm font-medium mr-2">Capacity:</span>
                      <span className="text-gray-700 font-semibold">{machine.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Precision', 'Automated', 'Quality'].map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-700 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All machines maintained with regular calibration and preventive maintenance schedules
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MachineryList;