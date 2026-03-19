import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 1.02 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for a smoother, app-like feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
