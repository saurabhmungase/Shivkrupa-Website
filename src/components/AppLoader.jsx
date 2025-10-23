import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const AppLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && children}
    </>
  );
};

export default AppLoader;