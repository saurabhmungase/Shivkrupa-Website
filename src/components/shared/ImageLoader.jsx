import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  supportsWebP, 
  getOptimizedImageUrl, 
  createBlurPlaceholder,
  getImagePriority,
  PRIORITY_LEVELS 
} from '../../utils/imageOptimization';

const ImageLoader = ({
  src,
  alt,
  className = '',
  placeholder = null,
  showLoader = true,
  onLoad = null,
  onError = null,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  format = 'auto',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [loadProgress, setLoadProgress] = useState(0);
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [blurPlaceholder, setBlurPlaceholder] = useState(null);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Initialize optimization
  useEffect(() => {
    const initializeOptimization = async () => {
      try {
        // Generate blur placeholder
        const placeholder = createBlurPlaceholder(40, 30);
        setBlurPlaceholder(placeholder);

        // Optimize image source
        const optimized = getOptimizedImageUrl(src, {
          quality,
          format,
          width: imgRef.current?.clientWidth,
          height: imgRef.current?.clientHeight
        });
        setOptimizedSrc(optimized);
      } catch (error) {
        console.warn('Image optimization failed:', error);
        setOptimizedSrc(src);
      }
    };

    initializeOptimization();
  }, [src, quality, format]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isInView]);

  // Image loading with progress tracking
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    
    // Track loading progress for larger images
    const xhr = new XMLHttpRequest();
    xhr.open('GET', optimizedSrc, true);
    xhr.responseType = 'blob';
    
    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setLoadProgress(Math.min(progress, 95)); // Cap at 95% until fully loaded
      }
    };
    
    xhr.onload = () => {
      const blob = xhr.response;
      const objectURL = URL.createObjectURL(blob);
      
      img.onload = () => {
        setLoadProgress(100);
        setIsLoaded(true);
        setIsError(false);
        URL.revokeObjectURL(objectURL);
        if (onLoad) onLoad();
      };
      
      img.onerror = () => {
        setIsLoaded(false);
        setIsError(true);
        URL.revokeObjectURL(objectURL);
        if (onError) onError();
      };
      
      img.src = objectURL;
    };
    
    xhr.onerror = () => {
      setIsLoaded(false);
      setIsError(true);
      if (onError) onError();
    };
    
    xhr.send();
    
    return () => {
      xhr.abort();
    };
  }, [optimizedSrc, isInView, onLoad, onError]);

  const LoadingSkeleton = () => (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {blurPlaceholder && (
        <motion.img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-3">
            <motion.div
              className="w-8 h-8 border-4 border-gray-300 border-t-red-600 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {loadProgress > 0 && (
              <div className="w-32 bg-gray-300 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
            <p className="text-xs text-gray-500">Loading...</p>
          </div>
        </div>
      )}
    </motion.div>
  );

  const ErrorPlaceholder = () => (
    <motion.div
      className={`bg-gray-100 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center space-y-2 text-gray-400">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <p className="text-xs">Failed to load</p>
      </div>
    </motion.div>
  );

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {!isInView ? (
        <LoadingSkeleton />
      ) : isError ? (
        <ErrorPlaceholder />
      ) : isLoaded ? (
        <motion.img
          src={optimizedSrc}
          alt={alt}
          className={className}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          {...props}
        />
      ) : (
        <>
          {placeholder && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {placeholder}
            </motion.div>
          )}
          <LoadingSkeleton />
        </>
      )}
    </div>
  );
};

export default ImageLoader;
