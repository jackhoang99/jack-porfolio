import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function Logo() {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg cursor-pointer"
    >
      <Terminal className="w-6 h-6 text-white" />
    </motion.div>
  );
}