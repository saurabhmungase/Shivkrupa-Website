import React from 'react';
import { 
  FiLayers, FiCpu, FiDatabase, FiGrid
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <FiLayers className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Injection Molding",
      items: ["Milacron 2000T", "Milacron 660T", "Milacron 910T", "Milacron 250T"],
      description: "Advanced injection molding with precision engineering"
    },
    {
      icon: <FiCpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Precision Components",
      items: ["Complex geometries", "Micro-molding", "Tight tolerances", "Custom assemblies"],
      description: "Micron-level precision for critical applications"
    },
    {
      icon: <FiDatabase className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "High-Volume Production",
      items: ["Automated systems", "24/7 operations", "Quality at scale", "Just-in-time delivery"],
      description: "Scalable manufacturing with consistent quality"
    },
    {
      icon: <FiGrid className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Industries Served",
      items: ["Automotive", "Medical Devices", "Consumer Electronics", "Industrial Equipment"],
      description: "Cross-industry expertise and solutions"
    }
  ];

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
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -5,
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
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08 + 0.3,
        duration: 0.3
      }
    })
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-red-600 uppercase mb-2 sm:mb-3"
          >
            Manufacturing Excellence
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0"
          >
            Our Core <span className="text-red-600">Capabilities</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-red-600 mx-auto mb-4 sm:mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Advanced plastic manufacturing solutions powered by cutting-edge technology 
            and decades of industry expertise
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="p-4 sm:p-5 lg:p-6 xl:p-8">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 rounded-lg sm:rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300"
                >
                  <div className="text-red-600">
                    {capability.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                  {capability.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2 sm:space-y-3">
                  {capability.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      className="flex items-start"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-2 h-2 sm:w-3 sm:h-3 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm leading-tight sm:leading-normal">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;