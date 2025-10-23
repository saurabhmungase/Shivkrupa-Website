import React, { useState, useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';

// Import your product images
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

// Improvement 1: Combine image data and style properties into one structure
// This is more robust and prevents errors from mismatched arrays.
const productsData = [
  { src: product9,  left: 5,  top: 5,  rot: -8, scale: 0.9 },
  { src: product10, left: 12, top: 12, rot: 5,  scale: 1.0 },
  { src: product3,  left: 3,  top: 22, rot: -3, scale: 0.85 },
  { src: product4,  left: 68, top: 4,  rot: 10, scale: 0.95 },
  { src: product5,  left: 75, top: 11, rot: -5, scale: 1.05 },
  { src: product6,  left: 64, top: 18, rot: 3,  scale: 0.9 },
  { src: product1,  left: 36, top: 25, rot: -2, scale: 1.2 },
  { src: product15, left: 27, top: 31, rot: 7,  scale: 1.0 },
  { src: product2,  left: 45, top: 35, rot: -5, scale: 1.0 },
  { src: product7,  left: 9,  top: 50, rot: 5,  scale: 0.9 },
  { src: product8,  left: 16, top: 60, rot: -7, scale: 0.95 },
  { src: product12, left: 5,  top: 65, rot: 2,  scale: 0.85 },
  { src: product13, left: 68, top: 56, rot: -8, scale: 0.9 },
  { src: product14, left: 75, top: 65, rot: 4,  scale: 0.95 },
  { src: product15, left: 62, top: 68, rot: -3, scale: 1.0 }
];

// --- Styled Components ---

// Improvement 2: Use styled-components for cleaner, more powerful styling.
// This allows for pseudo-selectors like &:hover, media queries, and better readability.

const CollageContainer = styled.div`
  position: relative;
  width: 90vw;
  max-width: 1100px;
  /* Use aspect-ratio for a more modern and direct approach */
  aspect-ratio: 10 / 7;
  max-height: 800px;
  margin: 20px auto;
  background-color: ##FFFFFF;
  overflow: hidden;
  
  padding: 2%;
`;

const ProductImage = styled.img`
  position: absolute;
  object-fit: contain;
  box-shadow: 4px 6px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: brightness(0.98);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Pass props to styled-components for dynamic values */
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  left: ${({ $left }) => `${$left}%`};
  top: ${({ $top }) => `${$top}%`};
  z-index: ${({ $zIndex }) => $zIndex};
  transform: rotate(${({ $rot }) => `${$rot}deg`}) scale(${({ $scale }) => $scale});

  /* This is the correct way to handle hover effects */
  &:hover {
    transform: scale(${({ $scale }) => $scale * 1.15}) rotate(0deg);
    z-index: 100; /* Bring hovered image to the front */
    box-shadow: 6px 12px 24px rgba(0, 0, 0, 0.18);
    filter: brightness(1.05);
  }
`;

// --- The Component ---

const MergeImage = () => {
  const [containerWidth, setContainerWidth] = useState(1100);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    // Use ResizeObserver for better performance than the 'resize' event
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
        observer.observe(containerRef.current);
    }

    // Cleanup
    return () => observer.disconnect();
  }, []);
  
  // Improvement 3: Memoize the image size calculation to avoid re-calculating on every render.
  const imageSize = useMemo(() => {
    const baseSize = containerWidth * 0.2;
    const maxSize = 240;
    return Math.min(baseSize, maxSize);
  }, [containerWidth]);

  return (
    <CollageContainer ref={containerRef}>
      {productsData.map((product, index) => (
        <ProductImage
          key={index}
          src={product.src}
          alt={`Collage image ${index + 1}`} // Improvement 4: More descriptive default alt text
          $size={imageSize}
          $left={product.left}
          $top={product.top}
          $rot={product.rot}
          $scale={product.scale}
          $zIndex={index} // Simple z-index is often sufficient
        />
      ))}
    </CollageContainer>
  );
};

export default MergeImage;