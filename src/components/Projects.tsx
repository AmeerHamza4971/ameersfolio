"use client"

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectsProps {
  projectImages: string[];
}
// test code enable
const Projects = ({ projectImages }: ProjectsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse position tracking for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Parallax effect for section
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "web",
      image: projectImages[0],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks, set deadlines, and track progress.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "app",
      image: projectImages[1],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      image: projectImages[2],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Mobile Apps' }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-pink-500/10 blur-[90px] animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGw9IiNmZmZmZmYwNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <h2 className="text-5xl font-bold inline-block relative mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">My Projects</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 rounded-full"></div>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Project Category Tabs */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-md ${activeTab === category.id 
                ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-white border border-purple-500/50 shadow-lg shadow-purple-500/20' 
                : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/40 border border-gray-700/50'}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            style={{ y }}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl h-full flex flex-col transform-gpu ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                layout
              >
                {/* Glass morphism card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-xl z-0"></div>
                
                {/* Animated glow effect on hover */}
                {hoveredProject === index && (
                  <div 
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 z-0"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 132, 252, 0.4) 0%, rgba(79, 70, 229, 0) 50%)`
                    }}
                  />
                )}
                
                {/* Project Image with Overlay */}
                <div className="relative h-[260px] w-full overflow-hidden rounded-t-2xl z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="bg-gray-800/80 backdrop-blur-md text-purple-400 p-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300"
                        aria-label="View live project"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-gray-800/80 backdrop-blur-md text-purple-400 p-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300"
                        aria-label="View GitHub repository"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/70 backdrop-blur-md text-purple-400 rounded-full text-xs font-semibold shadow-sm border border-purple-500/30">
                    {project.category === 'web' ? 'Web App' : 'Mobile App'}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-7 flex-grow flex flex-col z-10 relative">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-purple-400 rounded-full text-sm font-medium border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-auto pt-4 border-t border-gray-700/30">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group/link"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Corner Element - Only for featured projects */}
                {project.featured && (
                  <div className="absolute top-0 right-0 w-26 h-26 overflow-hidden z-20">
                    <div className="absolute transform rotate-45 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 w-28 h-28 -top-14 -right-14 flex items-end justify-start pb-3 pl-3">
                      <span className="text-xs font-bold transform -rotate-45 mb-1 ml-1">Featured</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 font-medium group transform hover:scale-105 backdrop-blur-sm"
          >
            <span>Let's work together</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
