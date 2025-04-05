import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Logo() {
  const [rotationDegrees, setRotationDegrees] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random angle between -45 and 45 degrees
      const randomAngle = Math.random() * 90 - 45;
      setRotationDegrees(randomAngle);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href="#home"
      animate={{ 
        rotate: rotationDegrees,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{ scale: 1.1 }}
      className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-xl cursor-pointer"
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
      >
        <div className="font-display font-bold text-xl md:text-2xl text-white tracking-tight drop-shadow-md">
          JH
        </div>
      </motion.div>
    </motion.a>
  );
}