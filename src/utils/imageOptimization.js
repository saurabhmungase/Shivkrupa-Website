// Image optimization utilities for better performance and format support

/**
 * Check if the browser supports WebP format
 */
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Generate responsive image sources for different screen sizes
 */
export const generateResponsiveSources = (baseSrc, sizes = []) => {
  const defaultSizes = [
    { width: 320, suffix: 'sm' },
    { width: 768, suffix: 'md' },
    { width: 1024, suffix: 'lg' },
    { width: 1280, suffix: 'xl' },
    { width: 1920, suffix: '2xl' }
  ];

  const imageSizes = sizes.length > 0 ? sizes : defaultSizes;
  const sources = [];

  // Generate WebP sources if supported
  imageSizes.forEach((size) => {
    const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, `_${size.suffix}.webp`);
    sources.push({
      src: webpSrc,
      type: 'image/webp',
      media: `(max-width: ${size.width}px)`,
      width: size.width
    });
  });

  // Generate fallback sources
  imageSizes.forEach((size) => {
    const fallbackSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, `_${size.suffix}.$1`);
    sources.push({
      src: fallbackSrc,
      type: 'image/jpeg',
      media: `(max-width: ${size.width}px)`,
      width: size.width
    });
  });

  return sources;
};

/**
 * Preload critical images
 */
export const preloadCriticalImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

/**
 * Generate optimized image URL with quality and format parameters
 */
export const getOptimizedImageUrl = (src, options = {}) => {
  const {
    quality = 80,
    format = 'auto',
    width = null,
    height = null,
    fit = 'cover'
  } = options;

  // If using a CDN or image optimization service, you can add URL parameters here
  // For now, we'll return the original src as most assets are already optimized
  return src;
};

/**
 * Create a blur placeholder for images
 */
export const createBlurPlaceholder = (width = 10, height = 10) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Create a simple gradient blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Get image dimensions without loading the full image
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Debounce function for scroll-based lazy loading
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for scroll-based lazy loading
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Calculate optimal image size based on container and device
 */
export const calculateOptimalImageSize = (containerWidth, containerHeight, devicePixelRatio = 1) => {
  const optimalWidth = Math.ceil(containerWidth * devicePixelRatio);
  const optimalHeight = Math.ceil(containerHeight * devicePixelRatio);
  
  return {
    width: optimalWidth,
    height: optimalHeight,
    devicePixelRatio
  };
};

/**
 * Image loading priority levels
 */
export const PRIORITY_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

/**
 * Get loading priority based on image position and importance
 */
export const getImagePriority = (index, total, isAboveFold = false) => {
  if (isAboveFold || index === 0) return PRIORITY_LEVELS.HIGH;
  if (index < 3) return PRIORITY_LEVELS.MEDIUM;
  return PRIORITY_LEVELS.LOW;
};


