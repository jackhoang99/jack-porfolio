import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'dark bg-teal-900' : 'bg-white'}`}>
      {/* Logo and Dark Mode Toggle */}
      <div className="fixed top-8 left-8 z-50">
        <Logo />
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-8 right-8 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </button>
      
      <Navigation darkMode={darkMode} />
      
      {/* Hero Section with 3D Scene */}
      <section id="home" className={`relative h-screen flex items-center justify-center snap-start ${darkMode ? 'bg-gradient-to-b from-teal-900 to-teal-800' : 'bg-gradient-to-b from-white to-blue-50/30'}`}>
        <Scene />
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`absolute -inset-4 bg-gradient-to-r ${darkMode ? 'from-teal-500/20 to-blue-400/20' : 'from-green-200/20 to-blue-200/20'} rounded-xl blur-xl`}></div>
            <h1 className={`font-display text-7xl font-light mb-4 tracking-wider relative ${darkMode ? 'text-white' : 'text-gray-800'}`}>Jack Hoang</h1>
            <p className="font-display text-3xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 tracking-wide">Software Developer</p>
            <p className={`font-sans text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building innovative, user-centric solutions with modern tech.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/jackhoang99" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jackhoang99/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-500 hover:text-green-500'} transition-colors`}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://drive.google.com/file/d/1nwA9HxwC2bInTfsAqiZNAO1bWW3ugwRF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}>
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400"
        >
          <Scroll className="h-8 w-8 animate-bounce" strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-800 to-teal-900' : 'bg-gradient-to-b from-blue-50/30 to-green-50/30'} snap-start`}>
        <Projects darkMode={darkMode} />
      </section>

      {/* AI Chat Section */}
      <section id="ai-chat" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-900 to-teal-800' : 'bg-gradient-to-b from-green-50/30 to-blue-50/30'} snap-start py-16`}>
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="inline-block">
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${darkMode ? 'from-teal-500/20 to-blue-400/20' : 'from-blue-200/20 to-green-200/20'} rounded-xl blur-xl`}></div>
                  <h2 className={`font-display text-5xl font-medium mb-8 relative ${darkMode ? 'text-white' : 'text-gray-800'}`}>Ask AI Me</h2>
                </div>
              </div>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
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
                src="https://30days.streamlit.app?embed=true"
                className="w-full h-[450px] border-0"
                title="AI Chat Assistant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-b from-teal-800 to-teal-900' : 'bg-gradient-to-b from-blue-50/30 to-green-50/30'} snap-start py-16`}>
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
      <footer className={`py-8 text-center text-base ${darkMode ? 'text-gray-400 bg-gradient-to-b from-teal-900 to-teal-950' : 'text-gray-600 bg-gradient-to-b from-green-50/30 to-white'}`}>
        <p>© 2025 Jack Hoang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;