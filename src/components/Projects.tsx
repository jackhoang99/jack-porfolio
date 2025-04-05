import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Github, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  short_description: string;
  main_image: string;
  gallery_images: string[];
  github_url: string | null;
  live_url: string | null;
  technologies: string[];
}

export function Projects({ darkMode }: { darkMode: boolean }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 px-4 text-center">
        <p className={darkMode ? 'text-white' : 'text-gray-600'}>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 px-4 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`font-display text-3xl md:text-5xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Featured Work</h2>
            <p className={`text-base md:text-xl mb-4 max-w-3xl mx-auto ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
              Explore some of my recent projects showcasing my expertise in full-stack development
              and modern web technologies.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.main_image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/60 to-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-light mb-3 text-white">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-100 mb-4 line-clamp-3">
                      {project.short_description || project.description}
                    </p>
                    <button
                      className="inline-flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm md:text-base"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <a
              href="https://github.com/jackhoang99"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center transition-colors duration-300 text-base font-medium ${darkMode ? 'text-white hover:text-teal-400' : 'text-blue-600 hover:text-blue-700'}`}
            >
              View More Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className={`rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row ${darkMode ? 'bg-teal-800' : 'bg-white'}`}>
            {/* Left side - Project Info */}
            <div className="w-full md:w-1/3 p-6 md:p-8 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl md:text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className={`text-sm md:text-base mb-6 leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                {selectedProject.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className={`text-base md:text-lg font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-teal-700 text-white' : 'bg-blue-50 text-blue-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.github_url && (
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 text-sm md:text-base ${
                      darkMode 
                        ? 'text-white border-white border hover:bg-white hover:text-teal-800' 
                        : 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                )}
                {selectedProject.live_url && (
                  <a
                    href={selectedProject.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-full transition-colors duration-300 text-sm md:text-base ${
                      darkMode 
                        ? 'text-white border-white border hover:bg-white hover:text-teal-800' 
                        : 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            {/* Right side - Image Gallery */}
            <div className={`w-full md:w-2/3 p-4 md:p-8 ${darkMode ? 'bg-teal-900' : 'bg-gray-100'}`}>
              <div className="h-full overflow-x-auto whitespace-nowrap flex gap-4 items-start">
                <img
                  src={selectedProject.main_image}
                  alt={`${selectedProject.title} main`}
                  className="h-auto w-full md:h-full md:w-auto rounded-lg object-cover"
                />
                {selectedProject.gallery_images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} gallery ${index + 1}`}
                    className="h-auto w-full md:h-full md:w-auto rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}