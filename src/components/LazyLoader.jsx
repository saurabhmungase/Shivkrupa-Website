import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SkeletonLoader } from './SkeletonLoader';

const LazyLoader = ({ children, fallback = null, threshold = 0.1 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsInView(true);
      // Simulate loading delay for better UX
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView, isLoaded]);

  const defaultFallback = (
    <div className="py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonLoader key={index} width="100%" height="120px" className="rounded-lg" />
        ))}
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      {isInView ? (
        isLoaded ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        ) : (
          fallback || defaultFallback
        )
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyLoader;
