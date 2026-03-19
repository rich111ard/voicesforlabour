import React from 'react';
import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Rolling for Rights" }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 dark:bg-[#0A0C10]/95 backdrop-blur-xl perspective-[1000px]">
      <div className="relative flex flex-col items-center">
        {/* 3D Scene Container - Reduced Size */}
        <motion.div 
          className="relative w-32 h-32 preserve-3d"
          initial={{ rotateX: 20, rotateY: -20 }}
          animate={{ 
            rotateY: [-20, 20, -20],
            rotateX: [20, 10, 20]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Shadow on the "floor" */}
          <motion.div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/10 dark:bg-white/5 rounded-[100%] blur-xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />

          {/* The 3D Wheel Structure */}
          <div className="absolute inset-0 preserve-3d">
            {/* Back Rim */}
            <motion.div 
              className="absolute inset-0 border-[4px] border-primary/10 dark:border-secondary/10 rounded-full translate-z-[-15px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Front Rim */}
            <motion.div 
              className="absolute inset-0 border-[4px] border-primary dark:border-secondary rounded-full translate-z-[15px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              {/* Spokes on Front Rim */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-accent/40 origin-left"
                  style={{ transform: `rotate(${i * 45}deg)` }}
                />
              ))}
            </motion.div>

            {/* Connecting Bars (The "Tread") */}
            <motion.div 
              className="absolute inset-0 preserve-3d"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 left-1/2 w-8 h-1.5 bg-primary/30 dark:bg-secondary/30"
                  style={{ 
                    transform: `rotate(${i * 30}deg) translateX(28px) rotateY(90deg) translateZ(0px)`,
                    width: '30px',
                    marginLeft: '-15px'
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* The 3D-ish Guinea Pig - Reduced Size */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-10 preserve-3d translate-z-[8px]"
            animate={{ 
              y: [0, -4, 0],
              rotateZ: [-4, 4, -4],
              rotateY: [0, 10, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 60 40" className="w-full h-full drop-shadow-xl">
              {/* Body with depth shading */}
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="text-primary" style={{ stopColor: 'currentColor' }} />
                  <stop offset="100%" className="text-primary-dark" style={{ stopColor: '#002D5A' }} />
                </linearGradient>
              </defs>
              <ellipse cx="30" cy="25" rx="25" ry="15" fill="url(#bodyGrad)" /> 
              <ellipse cx="45" cy="20" rx="12" ry="10" fill="url(#bodyGrad)" />
              
              {/* Accent Patch */}
              <path d="M 15 15 Q 25 10 35 20 L 30 35 Q 20 30 15 15" className="fill-accent opacity-90" />
              
              {/* Ear */}
              <ellipse cx="40" cy="12" rx="4" ry="5" className="fill-secondary" />
              
              {/* Eye (Glowing) */}
              <circle cx="50" cy="18" r="3" fill="white" />
              <motion.circle 
                cx="50" cy="18" r="4" 
                fill="white" 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <circle cx="51" cy="17.5" r="1.5" fill="black" />
              
              {/* Nose */}
              <circle cx="58" cy="22" r="2.5" className="fill-accent" />
              
              {/* Legs */}
              {[15, 25, 40, 50].map((x, i) => (
                <motion.path 
                  key={i}
                  d={`M ${x} 35 L ${x} 42`} 
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                  className="text-secondary"
                  animate={{ 
                    d: [
                      `M ${x} 35 L ${x} 42`, 
                      `M ${x} 35 L ${x + (i % 2 === 0 ? 5 : -5)} 39`, 
                      `M ${x} 35 L ${x} 42`
                    ] 
                  }}
                  transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Text and Progress - Adjusted Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="relative">
            <p className="text-sm font-black tracking-[0.4em] uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse text-center">
              {message}
            </p>
            {/* 3D Reflection Effect */}
            <p className="absolute top-full left-0 w-full text-sm font-black tracking-[0.4em] uppercase bg-gradient-to-b from-primary/20 to-transparent bg-clip-text text-transparent scale-y-[-0.5] blur-[1px] select-none text-center">
              {message}
            </p>
          </div>
          
          <div className="flex gap-2 mt-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.5)]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                  z: [0, 15, 0]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
