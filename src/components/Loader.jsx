import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading, onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        // Call completion callback after fade out
        setTimeout(() => {
          onLoadingComplete?.();
        }, 500);
      }, 100);

      return () => clearTimeout(fadeTimer);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
        !isLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Double Ring Loader */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-gray-300 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

// Simplified hook for managing loading state
export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setIsLoaderComplete(false);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setIsLoaderComplete(true);
  };

  return {
    isLoading,
    isLoaderComplete,
    startLoading,
    stopLoading,
    handleLoadingComplete
  };
};

export default Loader;