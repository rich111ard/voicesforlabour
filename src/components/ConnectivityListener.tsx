import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { AnimatePresence } from 'motion/react';

const ConnectivityListener: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <LoadingSpinner message="Connection Lost" />
      )}
    </AnimatePresence>
  );
};

export default ConnectivityListener;
