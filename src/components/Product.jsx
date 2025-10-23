import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiDownload, FiX, FiPackage, FiGrid } from 'react-icons/fi';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';
import product13 from '../assets/product13.png';
import product14 from '../assets/product14.png';
import product15 from '../assets/product15.png';

const products = [
  { id: 1, image: product1, category: "Automotive" },
  { id: 2, image: product2, category: "Consumer" },
  { id: 3, image: product3, category: "Industrial" },
  { id: 4, image: product4, category: "Automotive" },
  { id: 5, image: product5, category: "Medical" },
  { id: 6, image: product6, category: "Consumer" },
  { id: 7, image: product7, category: "Industrial" },
  { id: 8, image: product8, category: "Automotive" },
  { id: 9, image: product9, category: "Medical" },
  { id: 10, image: product10, category: "Consumer" },
  { id: 11, image: product11, category: "Industrial" },
  { id: 12, image: product12, category: "Automotive" },
  { id: 13, image: product13, category: "Medical" },
  { id: 14, image: product14, category: "Consumer" },
  { id: 15, image: product15, category: "Industrial" },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Automotive', 'Consumer', 'Industrial', 'Medical'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 mb-6"
          >
            <FiPackage className="w-8 h-8 text-red-600" />
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3"
          >
            Product Portfolio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-red-600">Product</span> Gallery
          </motion.h1>
          
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
            High-quality injection molded components precision-engineered for diverse industries and applications
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                layout
                className="bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={`Product ${product.id}`}
                    className="w-full h-full object-contain p-4 transition-opacity duration-300"
                    loading="lazy"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.button 
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiZoomIn className="text-gray-800 text-lg" />
                      </motion.button>
                      <motion.button 
                        className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiDownload className="text-gray-800 text-lg" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      #{String(product.id).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className="w-full h-full bg-white rounded-xl m-0.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiGrid className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div 
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Product Details</h3>
                    <p className="text-gray-600">#{String(selectedProduct.id).padStart(2, '0')} • {selectedProduct.category}</p>
                  </div>
                  <motion.button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-8">
                      <img 
                        src={selectedProduct.image} 
                        alt={`Product ${selectedProduct.id}`}
                        className="max-h-96 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Product Specifications</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium text-gray-900">{selectedProduct.category}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Material:</span>
                            <span className="font-medium text-gray-900">Engineering Plastic</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">Tolerance:</span>
                            <span className="font-medium text-gray-900">±0.01mm</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                        >
                          Request Quote
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:border-red-300 transition-colors duration-300"
                        >
                          Download Specs
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Product;   