

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHardHat, FaBolt, FaCogs } from "react-icons/fa";

// Direct image imports
const imageUrls = [
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744279705/m1_rubooq.png",
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744279862/m1_wv062m.png",
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744526117/m3_czv2d2.png",
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744526195/factory4_lbwv4h.png",
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744526113/m4_vhg8wa.png",
  "https://res.cloudinary.com/dtkyavk95/image/upload/v1744526109/m5_ibvjao.webp"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [featureHover, setFeatureHover] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImages = () => {
      imageUrls.forEach((url, index) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.src = url;
      });
    };

    preloadImages();
  }, []);

  // Memoized image change handler
  const handleImageChange = useCallback(() => {
    setDirection(1);
    setCurrentImage(prev => (prev + 1) % imageUrls.length);
  }, []);

  // Optimized interval management
  useEffect(() => {
    const interval = setInterval(handleImageChange, 3000);
    return () => clearInterval(interval);
  }, [handleImageChange]);

  const handleIndicatorClick = useCallback((index) => {
    setDirection(index > currentImage ? 1 : -1);
    setCurrentImage(index);
  }, [currentImage]);

  // Memoized animation variants
  const imageVariants = useMemo(() => ({
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { 
          type: "tween", 
          ease: [0.16, 1, 0.3, 1],
          duration: 0.6 // Further reduced for snappier feel
        },
        opacity: { duration: 0.6 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-30%" : "30%",
      opacity: 0,
      transition: {
        x: { 
          type: "tween", 
          ease: [0.16, 1, 0.3, 1],
          duration: 0.4
        },
        opacity: { duration: 0.4 },
      },
    }),
  }), []);

  // Memoized features data
  const features = useMemo(() => [
    { 
      icon: <FaHardHat className="text-2xl sm:text-3xl text-red-500" />, 
      title: "Quality Service", 
      desc: "We deliver exceptional after-sales service with 24/7 support",
    },
    { 
      icon: <FaBolt className="text-2xl sm:text-3xl text-red-500" />, 
      title: "Precision Performance", 
      desc: "Engineered to deliver superior quality with micron-level precision",
    },
    { 
      icon: <FaCogs className="text-2xl sm:text-3xl text-red-500" />, 
      title: "Innovative Automation", 
      desc: "Custom automated solutions tailored to your specific needs",
    },
  ], []);


  return (
    <div className="relative bg-white">
      {/* Loading Overlay */}
      {!imagesLoaded && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
            <div className="text-center">
              <p className="text-gray-600 font-medium">Loading Images...</p>
              <div className="w-48 bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{Math.round(loadingProgress)}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-screen min-h-[500px] flex items-center justify-start bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence 
            custom={direction} 
            initial={false}
            mode="wait"
          >
            <motion.img
              key={currentImage}
              src={imageUrls[currentImage]}
              alt="Factory Background"
              className="absolute inset-0 w-full h-full object-cover"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative z-10 max-w-3xl text-left text-white px-4 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div 
              className="mb-4 inline-block px-3 py-1 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-400/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-sm font-medium text-red-100">Innovating Since 2019</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="text-white">Precision Plastic</span>
              <br />
              <span className="text-red-400">Molding Solutions</span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Shivkrupa Technoplast delivers high-quality injection-molded components with cutting-edge technology and uncompromising quality standards for industrial excellence.
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {imageUrls.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-white w-4 sm:w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500 }}
            />
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="container mx-auto w-full px-4 sm:px-6 lg:w-10/12 -mt-12 sm:-mt-20 md:-mt-24 relative z-20">
        <motion.div
          className="bg-white shadow-xl sm:shadow-2xl rounded-lg sm:rounded-xl p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center py-6 px-3 sm:p-6 group"
              onHoverStart={() => setFeatureHover(index)}
              onHoverEnd={() => setFeatureHover(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-red-100 text-red-500 shadow-md sm:shadow-lg"
                animate={featureHover === index ? { rotate: 10, scale: 1.05 } : { rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 max-w-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);