import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai-chat', label: 'AI Chat' },
  { id: 'contact', label: 'Contact' }
];

export function Navigation({ darkMode }: { darkMode: boolean }) {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.getElementById(item.id)
      );

      const currentSection = sections.find((section, index) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        const nextSection = sections[index + 1];
        const nextRect = nextSection?.getBoundingClientRect();
        
        return (
          rect.top <= 100 && 
          (!nextSection || nextRect.top > 100)
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-8 top-[30%] z-50"
    >
      <ul className="space-y-4">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`flex items-center group ${
                activeSection === id 
                  ? (darkMode ? 'text-teal-400' : 'text-blue-600')
                  : (darkMode ? 'text-gray-400' : 'text-gray-400')
              }`}
            >
              <span className={`block mr-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-white' : ''}`}>
                {label}
              </span>
              <div className={`h-2 w-2 rounded-full border transition-all duration-300 ${
                activeSection === id 
                  ? (darkMode ? 'bg-teal-400 border-teal-400 shadow-lg shadow-teal-200/20' : 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200')
                  : (darkMode ? 'border-gray-400 group-hover:border-teal-400' : 'border-gray-400 group-hover:border-blue-400')
              }`} />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}