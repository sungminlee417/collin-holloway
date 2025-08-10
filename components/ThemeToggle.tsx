'use client';

import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 left-8 z-50 w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-slate-700 text-lg"></i>
      ) : (
        <i className="fas fa-sun text-yellow-500 text-lg"></i>
      )}
    </motion.button>
  );
}