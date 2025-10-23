import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaIndustry, FaCogs, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import MachineImage1 from '../../assets/m1-Photoroom.png';
import MachineImage2 from '../../assets/m2-Photoroom.png';
import MachineImage3 from '../../assets/m3-Photoroom.png';
import machineimage6 from '../../assets/m5png.webp';
import ImageLoader from '../shared/ImageLoader';

const MachineryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const machineryImages = [
    { src: MachineImage1, title: "Injection Molding Machine 1", description: "High-precision plastic injection molding equipment" },
    { src: MachineImage2, title: "Injection Molding Machine 2", description: "Advanced automation and control systems" },
    { src: MachineImage3, title: "Injection Molding Machine 3", description: "State-of-the-art production machinery" },
    { src: machineimage6, title: "Precision Equipment", description: "Specialized manufacturing equipment" }
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
        duration: 0.7
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
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const openModal = (index) => {
    setSelectedImage(machineryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % machineryImages.length);
    setSelectedImage(machineryImages[(currentIndex + 1) % machineryImages.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + machineryImages.length) % machineryImages.length);
    setSelectedImage(machineryImages[(currentIndex - 1 + machineryImages.length) % machineryImages.length]);
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
            Equipment Showcase
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Machinery <span className="text-red-600">Gallery</span>
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
            Explore our advanced injection molding machinery and automated production systems 
            that deliver precision and efficiency.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {machineryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <ImageLoader
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Expand Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExpand className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    View Image
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="w-full h-full bg-white rounded-2xl m-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
              >
                {/* Modal Image */}
                <div className="relative">
                  <ImageLoader
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                  
                  {/* Navigation Arrows */}
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-xl shadow-lg z-10 transition-all duration-300"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaChevronLeft className="text-xl" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-xl shadow-lg z-10 transition-all duration-300"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaChevronRight className="text-xl" />
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-xl shadow-lg z-10 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ×
                  </motion.button>

                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-sm font-medium">
                      {currentIndex + 1} / {machineryImages.length}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MachineryGallery;