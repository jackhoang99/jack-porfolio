import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [rotationDegrees, setRotationDegrees] = useState(360);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly choose between different rotation amounts
      const rotations = [180, 360, 720];
      const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
      setRotationDegrees(prev => prev + randomRotation);
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          transition: { duration: 0.2, ease: "easeInOut" }
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-xl flex items-center justify-center"
      >
        <motion.div
          animate={{ 
            rotate: rotationDegrees,
          }}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.95],
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="font-display font-bold text-3xl text-white tracking-tight drop-shadow-md">
            JH
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}