import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
      <motion.img
        src="/vite.svg"
        alt="Loading"
        className="w-24 h-24"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}