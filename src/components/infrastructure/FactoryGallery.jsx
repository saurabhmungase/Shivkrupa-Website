import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaIndustry, FaExpand } from 'react-icons/fa';
import factoryImage2 from '../../assets/factory2.png';
import factoryImage3 from '../../assets/factory3.png';
import factoryImage4 from '../../assets/m2.png';
import factoryImage5 from '../../assets/factory4.png';
import factoryImage6 from '../../assets/m5.webp';
import gateimage from '../../assets/shivkrupagate.webp';

const FactoryGallery = () => {
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  
  const facilityImages = [
    { src: gateimage, title: "Main Entrance", description: "Welcome to Shivkrupa Techno-Plast" },
    { src: factoryImage2, title: "Production Floor", description: "State-of-the-art injection molding machines" },
    { src: factoryImage3, title: "", description: "Precision measurement and testing area" },
    { src: factoryImage4, title: "Production Floor", description: "Automated assembly and packaging" },
    { src: factoryImage5, title: "Manufacturing Hub", description: "High-capacity production facility" },
    { src: factoryImage6, title: "Advanced Machinery", description: "Modern plastic injection equipment" }
  ];

  // Enhanced image preloading with progress tracking
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = facilityImages.length;

    const preloadImages = () => {
      facilityImages.forEach((imgObj, index) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          const progress = (loadedCount / totalImages) * 100;
          setLoadingProgress(progress);
          setLoadedImages(prev => ({ ...prev, [imgObj.src]: true }));
          
          if (loadedCount === totalImages) {
            setAllImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          const progress = (loadedCount / totalImages) * 100;
          setLoadingProgress(progress);
          setLoadedImages(prev => ({ ...prev, [imgObj.src]: false }));
          
          if (loadedCount === totalImages) {
            setAllImagesLoaded(true);
          }
        };
        img.src = imgObj.src;
      });
    };

    preloadImages();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) =>
        prev === facilityImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, facilityImages.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7
      }
    },
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }
    })
  };

  const nextFacilityImage = () => {
    setCurrentFacilityImage((prev) =>
      prev === facilityImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevFacilityImage = () => {
    setCurrentFacilityImage((prev) =>
      prev === 0 ? facilityImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Loading Overlay */}
      {!allImagesLoaded && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-md w-full px-8">
            {/* Loading Icon */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <FaIndustry className="text-white text-xl sm:text-2xl" />
              </div>
              <div className="absolute inset-0 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
            </div>

            {/* Loading Text */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Loading Manufacturing Facility
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                Preparing facility images...
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">{Math.round(loadingProgress)}%</span>
                <span className="text-xs text-gray-600">
                  {Math.round(loadingProgress / 16.67)} of {facilityImages.length} images loaded
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3"
          >
            Facility Tour
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4"
          >
            Our <span className="text-red-600">Manufacturing</span> Facility
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
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Take a virtual tour of our state-of-the-art manufacturing facility equipped with advanced injection molding technology
          </motion.p>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Main Image Carousel */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
              <AnimatePresence mode="wait" custom={1}>
                <motion.div
                  key={currentFacilityImage}
                  custom={1}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Image with loading state */}
                  <div className="relative w-full h-full">
                    {loadedImages[facilityImages[currentFacilityImage].src] ? (
                      <motion.img
                        src={facilityImages[currentFacilityImage].src}
                        alt={facilityImages[currentFacilityImage].title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                          <p className="text-xs sm:text-sm text-gray-500">Loading image...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        {facilityImages[currentFacilityImage].title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg">
                        {facilityImages[currentFacilityImage].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows - Always visible on mobile, show on hover on desktop */}
              <motion.button
                onClick={prevFacilityImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg z-10 transition-all duration-300 group/arrow opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-base sm:text-lg md:text-xl group-hover/arrow:text-red-600 transition-colors duration-300" />
              </motion.button>
              
              <motion.button
                onClick={nextFacilityImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg z-10 transition-all duration-300 group/arrow opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next image"
              >
                <FaChevronRight className="text-base sm:text-lg md:text-xl group-hover/arrow:text-red-600 transition-colors duration-300" />
              </motion.button>

              {/* Auto-play Toggle */}
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg z-10 transition-all duration-300 group/play opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                <div className={`w-2 h-2 sm:w-3 sm:h-3 border-2 border-gray-800 group-hover/play:border-red-600 transition-colors duration-300 ${
                  isAutoPlaying ? 'bg-red-600 border-red-600' : ''
                }`} />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-medium">
                  {currentFacilityImage + 1} / {facilityImages.length}
                </span>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-lg sm:rounded-xl shadow-lg max-w-[85vw] sm:max-w-[90vw] overflow-x-auto">
              {facilityImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentFacilityImage(index)}
                  className={`relative rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === currentFacilityImage 
                      ? 'border-red-600 scale-105 sm:scale-110' 
                      : 'border-gray-300 hover:border-red-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${image.title}`}
                >
                  {loadedImages[image.src] ? (
                    <motion.img
                      src={image.src}
                      alt=""
                      className="w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 bg-gray-200 flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                    </div>
                  )}
                  {index === currentFacilityImage && (
                    <motion.div
                      layoutId="activeThumbnail"
                      className="absolute inset-0 bg-red-600/20"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Facility Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12"
          >
            {[
              { number: "4,100", label: "Square Meters" },
              { number: "20,000", label: "Storage Space" },
              { number: "17,500", label: "Shop Floor Area" },
              { number: "50+", label: "Machines" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -3 }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactoryGallery;