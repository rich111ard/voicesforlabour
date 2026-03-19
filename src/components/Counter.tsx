import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';

interface CounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 0.5, className = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Parse the value to get the number and any suffix (like +, k, etc)
  const stringValue = String(value);
  const numericMatch = stringValue.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = stringValue.replace(String(numericValue), '');
  const prefix = stringValue.startsWith(String(numericValue)) ? '' : stringValue.split(String(numericValue))[0];

  const motionValue = useMotionValue(0);
  
  const isInView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted) {
        // Reset to 0
        motionValue.set(0);
        
        // Animate to target value
        const animation = animate(motionValue, numericValue, {
          duration: duration, // Faster duration
          ease: "easeOut",
        });

        await animation;

        // Pause at the final figure for 3 seconds
        if (isMounted) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [isInView, motionValue, numericValue, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [motionValue, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default Counter;
