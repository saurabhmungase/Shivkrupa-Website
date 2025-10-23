import React from 'react';
import { motion } from 'framer-motion';
import {
  FaIndustry,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  GiMechanicalArm,
  GiCooler,
  GiWaterTank,
  GiToolbox,
} from 'react-icons/gi';
import { MdPrecisionManufacturing, MdOutlineWaterDrop } from 'react-icons/md';

const SupportInfrastructure = () => {
  const auxiliaryEquipment = [
    {
      name: "Hopper Dryer",
      details: "Prasad Kock-Make (for all machines)",
      icon: <GiMechanicalArm className="w-8 h-8" />,
      category: "Material Handling"
    },
    {
      name: "Mould Temp. Controller",
      quantity: "03 Nos",
      icon: <MdOutlineWaterDrop className="w-8 h-8" />,
      category: "Temperature Control"
    },
    {
      name: "EOT Crane",
      details: "15 T & 5 T - 01 No each, 30 T & 10 T - 01 No each",
      icon: <FaIndustry className="w-8 h-8" />,
      category: "Material Handling"
    },
    {
      name: "Cooling Tower",
      details: "400 TR - 01 No",
      icon: <GiCooler className="w-8 h-8" />,
      category: "Cooling System"
    },
    {
      name: "DG Set",
      details: "625 KVA - 01 No",
      icon: <FaBolt className="w-8 h-8" />,
      category: "Power Backup"
    },
    {
      name: "Fire Fighting System",
      details: "Auto Fire Hydrant",
      icon: <FaShieldAlt className="w-8 h-8" />,
      category: "Safety"
    },
    {
      name: "QA Inspection Facilities",
      icon: <FaCheckCircle className="w-8 h-8" />,
      category: "Quality Control"
    },
    {
      name: "Portable Chiller Plant",
      details: "10 T",
      icon: <GiWaterTank className="w-8 h-8" />,
      category: "Cooling System"
    },
    {
      name: "Tool Room",
      details: "Preventive Maintenance of Mould",
      icon: <GiToolbox className="w-8 h-8" />,
      category: "Maintenance"
    },
    {
      name: "Measuring Instruments",
      icon: <MdPrecisionManufacturing className="w-8 h-8" />,
      category: "Quality Control"
    },
  ];

  // Get unique categories
  const categories = [...new Set(auxiliaryEquipment.map(item => item.category))];

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
            Complete Infrastructure
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Support <span className="text-red-600">Infrastructure</span>
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
            Comprehensive auxiliary equipment and systems that ensure seamless operations, 
            quality control, and uninterrupted production capabilities.
          </motion.p>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {auxiliaryEquipment.map((equipment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 p-6 text-center group cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300"
              >
                <div className="text-red-600">
                  {equipment.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                {equipment.name}
              </h3>

              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-red-50 group-hover:text-red-700 transition-colors duration-300">
                  {equipment.category}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2">
                {equipment.quantity && (
                  <p className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    {equipment.quantity}
                  </p>
                )}
                {equipment.details && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {equipment.details}
                  </p>
                )}
              </div>

              {/* Hover Indicator */}
              <div className="w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 group-hover:w-8 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Infrastructure Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Manufacturing Ecosystem
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our comprehensive support infrastructure ensures uninterrupted production, 
              strict quality control, and efficient operations across all manufacturing processes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  className="text-center p-4"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {category}
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    {auxiliaryEquipment.filter(item => item.category === category).length}
                  </div>
                  <div className="text-sm text-gray-500">Systems</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportInfrastructure;