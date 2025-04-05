import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText, Scroll, Moon, Sun } from 'lucide-react';
import { Scene } from './components/Scene';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Navigation } from './components/Navigation';
import { Logo } from './components/Logo';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'dark bg-teal-900' : 'bg-white'}`}>
      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            {/* Logo and Dark Mode Toggle */}
            <div className="fixed top-4 md:top-8 left-4 md:left-8 z-50">
              <Logo />
            </div>
            <button
              onClick={toggleDarkMode}
              className="fixed top-4 md:top-8 right-4 md:right-8 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Moon className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
              )}
            </button>
            
            <Navigation darkMode={darkMode} />
            
            {/* Hero Section with 3D Scene */}
            <section id="home" className={`relative h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-900 to-teal-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
              <Scene />
              <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-r ${darkMode ? 'from-teal-500/20 to-blue-400/20' : 'from-green-200/20 to-blue-200/20'} rounded-xl blur-xl`}></div>
                  <motion.h1 
                    className="font-display text-4xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight relative text-black"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    Jack Hoang
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <p className="font-display text-2xl md:text-4xl font-semibold mb-6 md:mb-8 relative text-gray-700">
                      Software Developer
                    </p>
                  </motion.div>
                  <div className="flex justify-center space-x-6 md:space-x-8 social-icons">
                    <motion.a 
                      href="https://github.com/jackhoang99?tab=repositories" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Github className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/jackhoang99" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
                    </motion.a>
                    <motion.a 
                      href="https://drive.google.com/file/d/1nwA9HxwC2bInTfsAqiZNAO1bWW3ugwRF/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FileText className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400"
              >
                <Scroll className="h-6 w-6 md:h-8 md:w-8 animate-bounce" strokeWidth={1.5} />
              </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-800 to-teal-900' : 'bg-gradient-to-b from-blue-50/30 to-green-50/30'}`}>
              <Projects darkMode={darkMode} />
            </section>

            {/* AI Chat Section */}
            <section id="ai-chat" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-900 to-teal-800' : 'bg-gradient-to-b from-green-50/30 to-blue-50/30'} py-8 md:py-16`}>
              <div className="w-full px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6 md:mb-8"
                  >
                    <div className="inline-block">
                      <div className="relative">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${darkMode ? 'from-teal-500/20 to-blue-400/20' : 'from-blue-200/20 to-green-200/20'} rounded-xl blur-xl`}></div>
                        <h2 className={`font-display text-3xl md:text-5xl font-medium mb-4 md:mb-8 relative ${darkMode ? 'text-white' : 'text-gray-800'}`}>Ask AI Me</h2>
                      </div>
                    </div>
                    <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      Have a question? Chat with my AI assistant to learn more about my work and experience.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <iframe
                      src="https://jackhoang.streamlit.app/?embed=true"
                      className="w-full h-[600px] md:h-[700px] border-0"
                      title="AI Chat Assistant"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-800 to-teal-900' : 'bg-gradient-to-b from-blue-50/30 to-green-50/30'} py-8 md:py-16`}>
              <div className="w-full px-4">
                <div className="max-w-6xl mx-auto flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <ContactForm darkMode={darkMode} />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className={`py-6 md:py-8 text-center text-sm md:text-base ${darkMode ? 'text-gray-400 bg-gradient-to-b from-teal-900 to-teal-950' : 'text-gray-600 bg-gradient-to-b from-green-50/30 to-white'}`}>
              <p>© 2025 Jack Hoang. All rights reserved.</p>
            </footer>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;