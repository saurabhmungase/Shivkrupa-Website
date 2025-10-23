import { useState, useEffect, useRef } from 'react';

/**
 * Hook to monitor image loading performance
 */
export const useImagePerformance = (imageUrls = []) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    totalImages: imageUrls.length,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    totalLoadTime: 0,
    loadingProgress: 0
  });

  const startTimes = useRef(new Map());
  const loadTimes = useRef([]);

  useEffect(() => {
    if (imageUrls.length === 0) return;

    const loadTimes = [];
    let loadedCount = 0;
    let failedCount = 0;

    const trackImageLoad = (url, startTime) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          const loadTime = performance.now() - startTime;
          loadTimes.push(loadTime);
          loadedCount++;
          resolve(loadTime);
        };
        
        img.onerror = () => {
          failedCount++;
          reject(new Error(`Failed to load image: ${url}`));
        };
        
        img.src = url;
      });
    };

    // Track all image loads
    const trackAllImages = async () => {
      const promises = imageUrls.map((url, index) => {
        const startTime = performance.now();
        startTimes.current.set(url, startTime);
        
        return trackImageLoad(url, startTime).catch(error => {
          console.warn('Image load failed:', error);
          return null;
        });
      });

      try {
        await Promise.allSettled(promises);
        
        const totalLoadTime = loadTimes.reduce((sum, time) => sum + (time || 0), 0);
        const averageLoadTime = loadTimes.length > 0 ? totalLoadTime / loadTimes.length : 0;
        
        setPerformanceMetrics({
          totalImages: imageUrls.length,
          loadedImages: loadedCount,
          failedImages: failedCount,
          averageLoadTime,
          totalLoadTime,
          loadingProgress: (loadedCount + failedCount) / imageUrls.length * 100
        });
      } catch (error) {
        console.error('Error tracking image performance:', error);
      }
    };

    trackAllImages();
  }, [imageUrls]);

  return performanceMetrics;
};

/**
 * Hook to monitor Core Web Vitals for images
 */
export const useImageCoreWebVitals = () => {
  const [vitals, setVitals] = useState({
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null  // Cumulative Layout Shift
  });

  useEffect(() => {
    // Monitor Largest Contentful Paint
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry.element && lastEntry.element.tagName === 'IMG') {
        setVitals(prev => ({
          ...prev,
          lcp: lastEntry.startTime
        }));
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observation not supported:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return vitals;
};

/**
 * Hook to optimize image loading based on connection speed
 */
export const useConnectionAwareLoading = () => {
  const [connectionInfo, setConnectionInfo] = useState({
    effectiveType: '4g',
    downlink: 10,
    rtt: 100,
    saveData: false
  });

  useEffect(() => {
    const updateConnectionInfo = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        setConnectionInfo({
          effectiveType: connection.effectiveType || '4g',
          downlink: connection.downlink || 10,
          rtt: connection.rtt || 100,
          saveData: connection.saveData || false
        });
      }
    };

    updateConnectionInfo();

    if ('connection' in navigator) {
      const connection = navigator.connection;
      connection.addEventListener('change', updateConnectionInfo);
      
      return () => {
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }
  }, []);

  const getOptimalImageQuality = () => {
    const { effectiveType, downlink, saveData } = connectionInfo;
    
    if (saveData) return 60;
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return 50;
      case '3g':
        return 70;
      case '4g':
      default:
        return downlink > 5 ? 85 : 75;
    }
  };

  const getOptimalImageFormat = () => {
    const { effectiveType, saveData } = connectionInfo;
    
    if (saveData) return 'jpeg';
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'jpeg';
      case '3g':
        return 'webp';
      case '4g':
      default:
        return 'webp';
    }
  };

  const shouldPreloadImages = () => {
    const { effectiveType, downlink } = connectionInfo;
    return effectiveType === '4g' && downlink > 2;
  };

  return {
    connectionInfo,
    getOptimalImageQuality,
    getOptimalImageFormat,
    shouldPreloadImages
  };
};

/**
 * Hook to manage image cache
 */
export const useImageCache = () => {
  const [cache, setCache] = useState(new Map());
  const [cacheStats, setCacheStats] = useState({
    hits: 0,
    misses: 0,
    size: 0
  });

  const addToCache = (url, imageData) => {
    setCache(prev => {
      const newCache = new Map(prev);
      newCache.set(url, {
        data: imageData,
        timestamp: Date.now()
      });
      return newCache;
    });
  };

  const getFromCache = (url) => {
    const cached = cache.get(url);
    if (cached) {
      setCacheStats(prev => ({
        ...prev,
        hits: prev.hits + 1
      }));
      return cached.data;
    }
    
    setCacheStats(prev => ({
      ...prev,
      misses: prev.misses + 1
    }));
    return null;
  };

  const clearCache = () => {
    setCache(new Map());
    setCacheStats({
      hits: 0,
      misses: 0,
      size: 0
    });
  };

  const cleanupOldCache = (maxAge = 24 * 60 * 60 * 1000) => { // 24 hours
    const now = Date.now();
    setCache(prev => {
      const newCache = new Map();
      prev.forEach((value, key) => {
        if (now - value.timestamp < maxAge) {
          newCache.set(key, value);
        }
      });
      return newCache;
    });
  };

  useEffect(() => {
    setCacheStats(prev => ({
      ...prev,
      size: cache.size
    }));
  }, [cache]);

  return {
    cache,
    cacheStats,
    addToCache,
    getFromCache,
    clearCache,
    cleanupOldCache
  };
};


